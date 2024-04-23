/**
 * Module related to file processing
 */
'use strict';

const fs= require('fs');
const mime = require('mime-types');

// Allowing file types (in this case only txt, but it can be extended)
const allowedExtensions = /(\.txt)$/i;

// Allowed mine types (can be extended)
const allowedMimeTypes = ['text/plain'];

/**
 * Validate file
 *
 * @param filePath
 */
let validate = (filePath) => {

    //  Check if file path is set
    if (!filePath.length) {
        throw new Error('No file path specified.');
    }

    // Validate file extension
    if (!allowedExtensions.test(filePath)) {
        throw new Error('Invalid file type for file [' + filePath + ']!');
    }

    // Get mime type
    const mimeType = mime.lookup(filePath);

    // Validate mime type
    if (!allowedMimeTypes.includes(mimeType)) {
        throw new Error('Invalid MIME type for file [' + filePath + ']');
    }
}

/**
 * Read file
 *
 * @param filePath
 * @returns {string[]}
 */
let readFile = (filePath) => {
    // Return the file content as data array
    return fs.readFileSync(filePath, 'utf-8').trim().split('\n');
}

let processFile = (filePath) => {

    // Validate file
    validate(filePath);

    // Read the file
    return readFile(filePath);
}


// Export methods
module.exports = {
    processFile: processFile,
    readFile: readFile
};