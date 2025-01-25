import { add } from "../stringCalculator";

// INFO: This is Bonus Points Test Cases
describe('multi-delimiter support', () => {
    it('handles delimiters of any length', () => {
        expect(add('//[***]\n1***2***3')).toBe(6);
        expect(add('//[|||||]\n5|||||3')).toBe(8);
    });

    it('supports multiple delimiters', () => {
        expect(add('//[*][%]\n1*2%3')).toBe(6);
        expect(add('//[##][$$]\n4##3$$2')).toBe(9);
    });

    it('works with mixed formats', () => {
        expect(add('//;\n1;2;3')).toBe(6); // Legacy format
        expect(add('1\n2,3')).toBe(6);     // Default delimiters
    });

    it('handles special regex characters', () => {
        expect(add('//[.*+]\n5.*+3.*+2')).toBe(10);
    });
});