/**
 * Module related to suitability score calculation
 */
'use strict';

/**
 * Check whether two numbers have any common factors greater than one.
 *
 * @param number1
 * @param number2
 * @returns {boolean}
 */
let haveCommonFactor = (number1, number2) => {
    for (let i = 2; i <= Math.min(number1, number2); i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            return true;
        }
    }
    return false;
}

/**
 * Calculate total suitability score
 *
 * @param array
 * @returns {*}
 */
let getTotalSuitabilityScore = (array) => {
    return array.reduce((first, last) => first + last.score, 0)
}

/**
 * Calculate suitability scores for all destinations and drivers
 *
 * @param destinations
 * @param drivers
 * @returns {*[]}
 */
let calculateSuitabilityScores = (destinations, drivers) => {

    //  Suitability score map per destination and driver
    let suitabilityScoresByDestinationAndDriver = [];

    // Loop through all addresses
    destinations.forEach(destination => {

        // Loop through all drivers
        drivers.forEach(driver => {

            // Add item to the lisy
            suitabilityScoresByDestinationAndDriver.push({
                'score': calculateSuitabilityScore(destination, driver),
                'address': destination.address,
                'driver': driver.name
            });
        });

        //  Sort the map based on the score desc - highest on the top
        suitabilityScoresByDestinationAndDriver = suitabilityScoresByDestinationAndDriver.sort((a, b) => {
            if (a.score >  b.score) {
                return -1;
            }
        });
    });

    return suitabilityScoresByDestinationAndDriver;
}

/**
 * Calculate suitability scores for given destination and driver
 *
 * @param destination
 * @param driver
 * @returns {*}
 */
let calculateSuitabilityScore = (destination, driver) => {

    // Init suitability  score
    let suitabilityScore;

    // If the number is odd, the score is the number of constants in driver's name
    if (destination.isOdd) {
        suitabilityScore = driver.consonantsCount;
    }
    // If the number is even, the score is the number of vowels in driver's name multiply by 1.5
    else {
        suitabilityScore = driver.vowelsCount * 1.5;
    }

    // There is any common factor for street name and driver's name other than 1, multiply suitability score by 1.5
    if (haveCommonFactor(driver.driverNameLength, destination.streetLength)) {
        suitabilityScore *= 1.5;
    }

    return suitabilityScore;
}

/**
 * Filter list by match by address or driver
 *
 * @param itemToCompare
 * @returns {function(*): *}
 */
let filterByAddressAndDriver = itemToCompare => (element) => {
    return (element.address !== itemToCompare.address && element.driver !== itemToCompare.driver);
}

/**
 * Assign addresses to drivers
 *
 * @param scorePerDriver
 * @returns {*[]}
 */
let assignDestinationsToDrivers = (scorePerDriver) => {

    // Init assignments
    let assignments = [];

    // Go through the map and get elements from the top - with the highest score
    while (scorePerDriver.length) {

        // Grab the very first one from the list
        let score = scorePerDriver.shift();

        // Add to the assigment list
        assignments.push(score);

        // Filter out all addresses and drivers already used from the list
        scorePerDriver = scorePerDriver.filter(filterByAddressAndDriver(score));
    }

    return assignments;
}

// Export methods
module.exports = {
    calculateSuitabilityScores: calculateSuitabilityScores,
    calculateSuitabilityScore:  calculateSuitabilityScore,
    assignDestinationsToDrivers: assignDestinationsToDrivers,
    haveCommonFactor: haveCommonFactor,
    getTotalSuitabilityScore: getTotalSuitabilityScore
};
