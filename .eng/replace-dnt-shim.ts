import { dirname, fromFileUrl } from "jsr:@std/path@1";

const __dirname = dirname(fromFileUrl(import.meta.url));
const pwd = dirname(__dirname);

export async function deleteShim(path: string) {
    await Deno.remove(path);
}

export async function replaceGlobalsFile(path: string) {
    const content = `
const globals = globalThis;

let win = false;

if (globals.Deno && globals.Deno.build && globals.Deno.build.os === "windows") {
    win = true;
} else if (globals.process && globals.process.platform === "win32") {
    win = true;
} else if (globals.navigator && globals.navigator.userAgent) {
    win = globals.navigator.userAgent.includes("Windows");
}

export const WINDOWS = win;

`;

    await Deno.writeTextFile(path, content);
}

export async function replaceGlobalsTypeFile(path: string) {
    const content = `export declare const WINDOWS: boolean;`;

    await Deno.writeTextFile(path, content);
}

await replaceGlobalsTypeFile(`${pwd}/npm/types/globals.d.ts`);
await replaceGlobalsFile(`${pwd}/npm/esm/globals.js`);
await deleteShim(`${pwd}/npm/esm/_dnt.shims.js`);
await deleteShim(`${pwd}/npm/types/_dnt.shims.d.ts`);
