test("string", () => {
    const name = "Eki Indradi";

    expect(name).toBe("Eki Indradi");
    expect(name).toMatch(/awan/);
});
