"use strict";
const fs = require('fs');
const cliSelect = require('cli-select');
const chalk = require('chalk');
const colors = require('colors');
const FILE = 'package.json';
const PATCH = "Patch";
const MINOR = "Minor";
const MAJOR = "Major";

const select = (question, values) => {
    console.log(question);
    return new Promise((resolve) => {
        cliSelect({
            values,
            valueRenderer: (value, selected) => {
                if (selected) {
                    return chalk.underline(value);
                }
         
                return value;
            },
        }).then((answer) => {
            resolve(answer.value);
        });
    })
}

const updateVersion = async () => {
    const { size } = fs.statSync(FILE);
    if (!size) { return new Error('Incorrect path') }
    const content = JSON.parse(fs.readFileSync(FILE));
    const currentVersion = content.version.split('.').map(item => Number(item));
    const newVersion = await select('Semantic version:'.green, [PATCH, MINOR, MAJOR]);

    switch (newVersion) {
        case PATCH:
            currentVersion[2] += 1;
            break;
        case MINOR:
            currentVersion[1] += 1;
            currentVersion[2] = 0;
            break;
        case MAJOR:
            currentVersion[0] += 1;
            currentVersion[1] = 0;
            currentVersion[2] = 0;
            break;
    }

    const version = currentVersion.join('.');
    console.log(version.yellow);

    fs.writeFileSync(FILE, JSON.stringify({...content, version}, null, 4));
}

module.exports.updateVersion = updateVersion;