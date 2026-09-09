// Desc: Jest configuration file
module.exports = {
    // specify the location of the test file
    testMatch: ['**/Specs/*.spec.js'],
    // test report generator
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './Report', // report directory
                filename: 'report.html', // report file name
                pageTitle: 'SuperTest and Jest API Test Report', // report title
                overwrite: true, // enable report file overwrite
                expand: true, // enable report file expansion
            },
        ],
    ],
};