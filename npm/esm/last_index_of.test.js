import { test } from "@bearz/testing";
import { equal, isDebugTests } from "@bearz/assert";
import { lastIndexOf, lastIndexOfFold } from "./last_index_of.js";
test("slices::lastIndexOf", () => {
    const tests = [
        { input: "hello world", test: "world", result: 6, position: Infinity },
        { input: "hello world", test: "world ", result: -1, position: Infinity },
        { input: "hello world", test: "WORLD", result: -1, position: Infinity },
        { input: "hello world", test: "WORLD ", result: -1, position: Infinity },
        { input: "hello world next", test: "world", result: 6, position: 11 },
        { input: "hello WÖrLD", test: "wörld", result: -1, position: Infinity },
    ];
    let i = 0;
    for (const { input, test, result, position } of tests) {
        if (isDebugTests()) {
            console.log(i, input, test, result);
        }
        i++;
        const actual = lastIndexOf(input, test, position);
        equal(actual, result);
    }
});
test("slices::lastIndexOfFold", () => {
    const tests = [
        { input: "hello world", test: "world", result: 6, position: Infinity },
        { input: "hello world", test: "world ", result: -1, position: Infinity },
        { input: "hello world", test: "WORLD", result: 6, position: Infinity },
        { input: "hello world", test: "WORLD ", result: -1, position: Infinity },
        { input: "hello world next", test: "world", result: 6, position: 11 },
        { input: "hello WÖrLD", test: "wörld", result: 6, position: Infinity },
    ];
    let i = 0;
    for (const { input, test, result, position } of tests) {
        i++;
        const actual = lastIndexOfFold(input, test, position);
        if (isDebugTests()) {
            console.log(i, input, test, result, actual);
        }
        equal(actual, result);
    }
});
