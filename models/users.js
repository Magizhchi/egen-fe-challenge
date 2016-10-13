/**
 * Created by Karthikk on 10/13/2016.
 */

var db = require('../db');
var collectionName = 'users';

module.exports = {
    all: function (callback) {
        db.get().collection(collectionName).find().toArray(callback);
    },
    
    add: function(newUser, callback){
        db.get().collection(collectionName).insertOne(newUser, callback);
    }
}
