import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // * Arrange
        // const a = 2, b= 1;
        // * Act
        // const res = max(a, b);
        // * Assert
        // expect(result).toBe(2); 

        expect(max(2, 1)).toBe(2);
    });

    it('should return the second argument if it is greater', () => {
        expect(max(-1, 1)).toBe(1);
    });

    it('should return the first argument if arguments are equal', () => {
       expect(max(2, 2)).toBe(2); 
    });
});

describe('fizzBuzz', () => {
    it('should return FizzBuzz if the argument is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if the argument is divisible only by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    it('should return Buzz if the argument is divisible only by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    it('should return the argument as a string if the argument is not divisible by either 3 or 5', () => {
        expect(fizzBuzz(11)).toBe("11");
    });
});

describe('factorial', () => {
    it('should return 1 if argument is 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should return 1 if argument is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should return 2 if argument is 2', () => {
        expect(factorial(2)).toBe(2);
    });

    it('should return undefined if argument is negative', () => {
        // expect(factorial(-1)).toBe(undefined);
        expect(factorial(-1)).toBeUndefined();
    });
});