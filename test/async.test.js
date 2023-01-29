import {sayHelloAsync} from "../src/async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Eki");
    expect(result).toBe("Hello Eki");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Eki")).resolves.toBe("Hello Eki");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
