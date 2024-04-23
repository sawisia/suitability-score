# Matching shipments and drivers based on highest suitability score.

The program assigns a shipment destinations to a driver while maximizing the total suitability of all shipments to all drivers based on following rules:
- If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
- If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
- If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.


## Requirements
- Node.js
- Text file including the list of destination (see example of the file in data directory)
- Text file including the list of driver's names (see example of the file in data directory)

## Installation
In the main project directory run:
```bash
npm install
```

## Running application

In the main project directory run:
```bash
node app.js --addresses=[path_to_destinations_file] --drivers=[path_to_drivers_file]
```
or
```bash
node app.js -a=[path_to_destinations_file] -a=[path_to_drivers_file]
```

Example:

```bash
node app.js --addresses=./data/StreetAddresses.txt --drivers=./data/DriverNames.txt
```

## Output
The output would be the total SS and a matching between shipment destinations and drivers.
Example:
```bash
Suitability score [6] for shipment destination [3532 Pacific Beach Drive, Pacific Beach, CA, 55555] and driver [Bruce Wayne].
Suitability score [4] for shipment destination [623 Evergreen Terrace, Portland, OR, 15125] and driver [John Doe].
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
