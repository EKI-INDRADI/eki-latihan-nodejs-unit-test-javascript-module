test("test toBe", () => {
    const name = "Eki";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Eki');
});

test("test toEqual", () => {
    let person = {id: "eki"};
    Object.assign(person, {name: "Eki"});

    expect(person).toEqual({id: "eki", name: "Eki"});
})
