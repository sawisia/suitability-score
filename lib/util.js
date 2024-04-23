/**
 * Module related to any util methods
 */
'use strict';

/**
 * Display formatted output
 *
 * @param array
 * @returns {*}
 */
let displayFormattedOutput = (array) => array.map(
    item => console.info('Suitability score [' + item.score
        + '] for shipment destination [' +  item.address
        + '] and driver [' + item.driver  + '].')
);

module.exports = {
    displayFormattedOutput: displayFormattedOutput
};