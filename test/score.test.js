const {haveCommonFactor, calculateSuitabilityScore} = require('../lib/score');

describe('haveCommonFactor', () => {
    test('Returns true if there is a common factor other than one', () => {
        expect(haveCommonFactor(2, 8)).toBe(true);
    });

    test('Returns false if there is a no common factor other than one', () => {
        expect(haveCommonFactor(2, 3)).toBe(false);
    });
});

describe('calculateSuitabilityScore', () => {

    test('Returns NaN suitability scores', () => {

        const address = {};
        const driver = {};
        expect(calculateSuitabilityScore(address, driver)).toBeNaN();
    });

    test('Returns suitability scores with street name odd and no common factor', () => {
        const address = {
            address: '11 Atlantic Avenue, Atlantic City, NJ, 55555',
            streetLength: 15,
            isOdd: 1
        };
        const driver = {
            name: 'Peter Parker',
            driverNameLength: 12,
            vowelsCount: 4,
            consonantsCount: 7
        };
        expect(calculateSuitabilityScore(address, driver)).toBe(10.5);
    });

    test('Returns suitability scores with street name even and common factor', () => {
        const address = {
            address: '11 Atlantic Ave, Atlantic City, NJ, 55555',
            streetLength: 12,
            isOdd: 0
        };
        const driver = {
            name: 'Peter Parker',
            driverNameLength: 12,
            vowelsCount: 4,
            consonantsCount: 7
        };
        expect(calculateSuitabilityScore(address, driver)).toBe(9);
    });

    test('Returns suitability scores with street name even and no common factor ', () => {

        const address = {
            address: '44 Fake Dr., San Diego, CA 92122',
            streetLength: 8,
            isOdd: 0
        };
        const driver = {
            name: 'Daniel Davidson',
            driverNameLength: 15,
            vowelsCount: 6,
            consonantsCount: 7
        };
        expect(calculateSuitabilityScore(address, driver)).toBe(9);
    });

    test('Returns suitability scores with street name even and common factor', () => {

        const address = {
            address: '44 Fake Dr., San Diego, CA 92122',
            streetLength: 8,
            isOdd: 0
        };
        const driver = {
            name: 'Daniell Davidson',
            driverNameLength: 16,
            vowelsCount: 6,
            consonantsCount: 8
        };
        expect(calculateSuitabilityScore(address, driver)).toBe(13.5);
    });
});