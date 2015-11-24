/**
 * Created by rosen on 24/11/2015.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;


var url = 'mongodb://rosendyakov:0886540590r@ds054308.mongolab.com:54308/mongodatabase';

var MongoClient = mongodb.MongoClient;

MongoClient.connect(url, function (err, db) {
    response.write('Connection Made \n');
    if (err) {
        response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
        //Error so close connection
        db.close();
    } else {
        //HURRAY!! We are connected. :)
        response.write('Connection established to' + url +"\n");

        // do some work here with the database.

        //Done Close connection
        db.close();
    }
    response.end('Finished, Connection closed \n');
});


