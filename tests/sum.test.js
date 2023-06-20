const sum = require("../functions/sum");

/**
 * V1 les uns en dessous des autres
 */
// test("adds 1 + 2 to equal 3", () => {
// 	expect(sum(1, 2)).toBe(3);
// });

// test("adds '1' + '2' to equal undefined", () => {
// 	expect(sum("1", "2")).toBe(undefined);
// });

/**
 * V2 avec le détail des tests sur un élément donné
 */
describe("Sum", () => {
	test("adds 1 + 2 to equal 3", () => {
		expect(sum(1, 2)).toBe(3);
	});

	it("adds '1' + '2' to equal undefined", () => {
		expect(sum("1", "2")).toBe(undefined);
	});
});
