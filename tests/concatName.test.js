const concatName = require("../functions/concatName");

test("concatName to be a function", () => {
	expect(typeof concatName).toBe("function");
});

test("add fName = anthony & lName = gorski return : anthony gorski", () => {
	expect(concatName("anthony", "gorski")).toBe("anthony gorski");
});

test("add fName = 10 & lName = 12 return : undefined", () => {
	expect(concatName(10, 12)).toBe(undefined);
});
