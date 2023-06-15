import { add, substract, multiply, divide } from "./calc";

// Jest
describe("Basic math operations", () => {
    it("Calling add with the array [1, 2, 3, 4] should return 10", () => {
        expect(add([1, 2, 3, 4])).toBe(10);
    });
});

describe("Basic math operations", () => {
    it("Calling substract with the array [5,2] should return 3", () => {
        expect(substract([5, 2])).toBe(3);
    });
});

describe("Basic math operations", () => {
    it("Calling multiply with the array [1, 2, 3, 4] should return 24", () => {
        expect(multiply([1, 2, 3, 4])).toBe(10);
    });
});

describe("Basic math operations", () => {
    // Omite una prueba, si necesidad de comentar o borrar.
    xit("Calling divide with the array [10, 2] should return 5", () => {
        expect(divide([10, 2])).toBe(5);
    });
});
