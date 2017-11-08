import { greet } from './greet';


describe('greet', () => {
    it('should include the name in the maasage', () => {
        expect(greet('luc')).toContain('luc');
    });
});
