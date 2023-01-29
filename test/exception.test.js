import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("eki")).toThrow();
    expect(() => callMe("eki")).toThrow(MyException);
    expect(() => callMe("eki")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
    expect(callMe("Budi")).toBe("OK");
});
