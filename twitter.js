/**
 * Created by rosen on 04/12/2015.
 */
var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;

var client = new Twitter({
    consumer_key: 'UDSdF8SfFY7QGWsL3yNHxmuQL',
    consumer_secret: 'SPbnmEN2zBdSotJiT9EVhEBskMmyWIJH6ul9Svd2lh8IXgN8ZZ',
    access_token_key: '2925221458-aFv1v0rgtBWhcz33K5y7AgS1DKogCTa11hJHlQK',
    access_token_secret: '1NUFPlVRS4CFDURfDJ0PAxT9G9gNBEBrJidj37fBU27aG'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });


    client.get('search/tweets', {q: 'lolcats'}, function(error, tweets){
        response.end(JSON.stringify(tweets));
        var json = [];
        for (var i =0; i< tweets.statuses.length ; i++)
        {
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }
        response.end(JSON.stringify(json));

    });

}).listen(port);

