/**
 * Module related to any util methods
 */
'use strict';

const {getTotalSuitabilityScore} = require("./score");

/**
 * Display destinations and drivers
 *
 * @param array
 * @returns {*}
 */
let displayDestinationsAndDrivers = (array) => array.map(
    item => console.info('Suitability score [' + item.score + '] ' +
        'for shipment destination [' +  item.address + '] and driver [' + item.driver  + '].')
);

/**
 * Display total suitability score
 * @param array
 */
let displayTotalSuitabilityScore = (array)  => {
    console.info('Total suitability score is [' + getTotalSuitabilityScore(array) + '].');
}

/**
 * Display formatted output
 * @param array
 */
let displayFormattedOutput = (array) => {
    displayTotalSuitabilityScore(array);
    displayDestinationsAndDrivers(array);
}

module.exports = {
    displayFormattedOutput: displayFormattedOutput
};