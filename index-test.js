const leapYearCalculator = require('./index');
const { assert } = require('chai');

describe('LeapYear', () => {
    describe('leapyear', () => {
        it('returns false for typical common year', () => {
            const result = leapYearCalculator(2001);
            assert.strictEqual(false, result);
        });

        it('returns true for typical leap year', () => {
            const result = leapYearCalculator(1996);
            assert.strictEqual(true, result);
        });

        it('returns false for atypical common year', () => {
            const result = leapYearCalculator(1900);
            assert.strictEqual(false, result);
        });

        it('returns true for atypical leap year', () => {
            const result = leapYearCalculator(2000);
            assert.strictEqual(true, result);
        });
    });
});