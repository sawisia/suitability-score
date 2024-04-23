const {calculateSuitabilityScores, assignDestinationsToDrivers} = require('./lib/score');
const {parseDestinations, parseDrivers} = require('./lib/data');
const {displayFormattedOutput} = require('./lib/util');
const {getopt} = require('stdio');

try {
    // Set command line options/arguments
    var opt = getopt({
        'addresses': {key: 'a', description: 'Destination addresses list file path', required: true},
        'drivers': {key: 'd', description: 'Drivers list file path',  required: true}
    });

    // Get destinations from the file - first argument passed
    let destinations = parseDestinations(opt.args[0]);

    // Get drivers from the file - second argument passed
    let drivers = parseDrivers(opt.args[1]);

    // Calculate scores destinations by drivers
    let suitabilityScore = calculateSuitabilityScores(destinations, drivers);

    // Assign destinations to drivers
    let assignedDestinationsToDrivers = assignDestinationsToDrivers(suitabilityScore);

    // Display formatted output
    displayFormattedOutput(assignedDestinationsToDrivers);
} catch ({name, message}) {
    console.error('There was an error while calculating suitability score due to: ' + message + ' (' + name + ')')
}


