const { add, subtract, multiply, divide } = require("./calculator");

test("add: Adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtract: Subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("multiply: Multiplies two numbers correctly", () => {
    expect(multiply(4, 3)).toBe(12);
});

test("divide: Divides two numbers correctly", () => {
    expect(divide(6, 2)).toBe(3);
});

test("divide: Throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});
