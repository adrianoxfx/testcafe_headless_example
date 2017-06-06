"use strict";

const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['tests/busca_test.js'])
            .screenshots('screenshot', true)
            .browsers(['nightmare'])
            .reporter('spec')
            .run({
                selectorTimeout: 100000,
                assertionTimeout: 10000,
                visibilityCheck: true
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
        process.exit(failedCount ? 1 : 0);
    });
    