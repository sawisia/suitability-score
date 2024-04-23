/**
 * Module related to data processing
 */
'use strict';

const {processFile} = require("./file");

/**
 * Parse shipment destinations from the file
 *
 * @param pathToFile
 * @returns {*[]}
 */
let parseDestinations = (pathToFile) => {

    // Read destinations from the file
    let destinations = processFile(pathToFile);

    // Check whether we have array of destinations before looping
    if  (!Array.isArray(destinations)) {
        throw new Error('Street names cannot be parsed from destinations');
    }

    // Init new parsed destination list
    let parsedDestinations = [];

    // Preprocess destinations one by one
    destinations.forEach(destination => {
        let streetLength = destination
            .split(',')
            .shift()
            .replace(/\d+/g, '')
            .trim()
            .length;

        // Add parsed destination to the list
        parsedDestinations.push({
            'address': destination,
            'streetLength': streetLength,
            'isOdd': streetLength % 2
        });
    });

    return parsedDestinations;
}

/**
 * Parse drivers from the file
 *
 * @param pathToFile
 * @returns {*[]}
 */
let parseDrivers = (pathToFile) => {

    // Read drivers from the file
    let drivers = processFile(pathToFile);

    // Check whether we have array before looping
    if  (!Array.isArray(drivers)) {
        throw new Error('Driver names cannot be parsed from drivers');
    }

    // Inti new parsed driver list
    let parsedDrivers = [];

    // Preprocess driver data
    drivers.forEach(driver => {
        parsedDrivers.push({
            'name': driver,
            'driverNameLength': driver.trim().length,
            'vowelsCount': driver.match(/[aeiou]/gi).length,
            'consonantsCount': driver.replace(/\s+/g, '').match(/[^aeiou]/gi).length
        });
    });

    return parsedDrivers;
}

// Export methods
module.exports = {
    parseDestinations: parseDestinations,
    parseDrivers: parseDrivers
};