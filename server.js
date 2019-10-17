const express = require("express");
require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
const bodyParser = require("body-parser");

let app = new express();
let port = 8181;



app.use(bodyParser.json());

// Start server
app.listen(port, () => {
    console.log(`Server started on port ` + port);
});

app.get("/", function (req, resp) {

    let dbx = new Dropbox({ accessToken: '**********'});
    dbx.filesListFolder({ path: '' })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    resp.send("<h1>Welcome to NodeJs server app</h1>");
});