/**
 * Created by uw on 23/01/16.
 */

var mongodb = require('mongodb');
var md5 = require('md5');
var Table = require('cli-table');
var ObjectID = mongodb.ObjectID;


var counter = 0;

var keys = [];

function hash(key) {

    if (key) {
        if (keys.indexOf(key) === -1) {
            keys.push(key);
        }
        return ObjectID(md5(key.toString()).substring(0, 12)).toString();
    }
    else {
        return ObjectID(md5(counter++).substring(0, 12)).toString();
    }
}

module.exports = hash;

module.exports.setCounter = function (newCounter) {
    counter = newCounter;
};

module.exports.table = function () {

    var values = [];
    var maxLen = 0;

    keys.sort(function (l, r) {
        return l > r;
    });

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        maxLen = Math.max(key.length, maxLen);
        values.push([key, hash(key)]);
    }

    var table = new Table({
        //head: ['Key', 'ObjecID'],
        chars: {'mid': '', 'left-mid': '', 'mid-mid': '', 'right-mid': ''},
        colWidths: [maxLen + 2, 30]
    });

    values.forEach(function (value) {
        table.push(value)
    });

    return table.toString();
};