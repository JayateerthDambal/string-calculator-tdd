import { add } from '../stringCalculator';

//* This test is for checking if the function returns 0 if NO String is provided
describe('add', () => {
    it('returns 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    // * This test is for checking Single Number 
    it('returns number itself for a single input', () => {
        expect(add('9')).toBe(9) // Test for INPUT: '5' returning 5 
    });

    //* This test is for Two Numbers
    it('returns sum of two comma separated numbers', () => {
        expect(add('4, 5')).toBe(9); // Adding 4 + 5 => 9
    });

    //* This test is for New line delimters
    it('returns sum of numbers separated by new line', () => {
        expect(add('9\n8,7')).toBe(24);
    });

    //* This test is for allowing custom delimeters
    it('supports custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3); // Assertion: "//;\n1;2" → 3
    });

    // * This test is for negative inputs
    it('throws error for negative numbers', () => {
        // Single negative input
        expect(() => add('-1,2')).toThrow('negatives not allowed: -1');
        // Multiple negatives inputs
        expect(() => add('2,-4,-5')).toThrow('negatives not allowed: -4, -5');
    });

    //* This test is for checking if nunber is greater than 100
    it('ignores numbers greater than 1000', () => {
        expect(add('2,1001')).toBe(2); // 2 + 1001 → 2
        expect(add('1001,1002')).toBe(0); // All ignored
        expect(add('5,1200,3')).toBe(8); // 5 + 3 = 8
    });

    // * This test is for handling Edge Case:
    it('handles numbers equal to 1000', () => {
        expect(add('1000,2')).toBe(1002); // 1000 + 2 = 1002
    });

});