import { getCurrencies } from './getCurrencies';


describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const actual = getCurrencies();
        expect(actual).toContain('USD');
        expect(actual).toContain('AUD');
        expect(actual).toContain('EUR');
    });
});
