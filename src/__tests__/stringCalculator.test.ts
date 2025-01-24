import { add } from '../stringCalculator';

describe('add', () => {
    it('returns 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });
});