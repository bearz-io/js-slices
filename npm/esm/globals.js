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
