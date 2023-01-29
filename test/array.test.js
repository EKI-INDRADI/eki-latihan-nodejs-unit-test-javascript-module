test("array simple", () => {
    const names = ["eki", "indradi","xxx"];
    expect(names).toEqual(["eki", "indradi","xxx"]);
    expect(names).toContain("eki");
});

test("array object", () => {
    const persons = [
        {
            name: "eki"
        },
        {
            name: "Budi"
        }
    ];
    expect(persons).toContainEqual({
        name: "eki"
    });
});
