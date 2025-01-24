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
});