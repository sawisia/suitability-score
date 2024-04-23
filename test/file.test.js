const {readFile, validate} = require("../lib/file");

describe('readFile', () => {

    test('Throw an error wile there is not file path given', () => {
        expect(() => {
            readFile();
        }).toThrow();
    });
});

describe('validate', () => {

    test('Throw an error wile there is not file path given', () => {
        expect(() => {
            readFile();
        }).toThrow();
    });

    test('Throw an error wile there is not allowed file extension', () => {
        expect(() => {
            readFile('hello.png');
        }).toThrow();
    });
});