/**
 * Created by uw on 23/01/16.
 */
var assert = require('assert');
var ID = require('../index.js');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

describe('TestID', function () {
    describe('', function () {

        it('should return valid ids', function () {
            var id = ObjectID(ID('Hello'));
            assert(id);
        });

        it('should return unique ids', function () {
            var id = ID();
            var id2 = ID();
            var id3 = ID('Peter.Lustig');
            var id4 = ID('Peter.Lusti');


            assert(id);
            assert(id2);
            assert(id3);
            assert(id !== id2);
            assert(id2 !== id3);
            assert(id3 !== id4);

        });

        it('should return equal id if the same key is provided', function () {
            var id = ID('Peter.Lustig');
            var id2 = ID('Peter.Lustig');
            assert(id === id2);
        });

        it('should return be possible to set the counter', function () {
            ID.setCounter(0);
            var id = ID();
            ID.setCounter(0);
            var id2 = ID();
            assert(id === id2);
        });

        it('should be able to print keys/objectids', function () {
            ID('Peter.Lustig');
            assert(ID.table());
            console.log(ID.table());
        });


    });
});
