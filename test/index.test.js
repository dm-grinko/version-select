const { assert } = require('chai');
const { getCurrentVersion, getNewVersion } = require('../index');

describe('Main', () => {
    describe('getCurrentVersion',  () => {
        it('should return correct data', () => {
            const result = getCurrentVersion({
                "version": "3.4.5"
            });
            assert.deepEqual(result, [3, 4, 5]);
        });
    });
    describe('getNewVersion',  () => {
        it('should return correct Patch relese version', () => {
            const result = getNewVersion([3, 4, 5], 'Patch');
            assert.equal(result, "3.4.6");
        });
        it('should return correct Minor relese version', () => {
            const result = getNewVersion([3, 4, 5], 'Minor');
            assert.equal(result, "3.5.0");
        });
        it('should return correct Major relese version', () => {
            const result = getNewVersion([3, 4, 5], 'Major');
            assert.equal(result, "4.0.0");
        });
    });
});
