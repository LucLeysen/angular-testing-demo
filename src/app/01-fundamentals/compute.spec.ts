import { compute } from './compute';

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const actual = compute(-1);
        expect(actual).toBe(0);
    });

    it('should increment the input if it is positive', () => {
        const actual = compute(1);
        expect(actual).toBe(2);
    });
});
