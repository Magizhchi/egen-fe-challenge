/**
 * Created by Karthikk on 10/13/2016.
 */

var MongoClient = require('mongodb').MongoClient;

module.exports = {
    connection: null,

    get: function() {
        return this.connection;
    },

    close: function() {
        if(this.connection !== null)
            this.connection.close();
        this.connection = null;
    },

    connect: function(dbname, callback) {
        var self = this;
        var cacheConnection = function(err, db) {
            if(err) {
                self.connection = null;
                callback(err);
            }
            else
                self.connection = db;
            callback();
        }

        try {
            MongoClient.connect(dbname, cacheConnection);
        } catch(ex) {
            callback(ex);
        }
    }
};