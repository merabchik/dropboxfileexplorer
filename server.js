const express = require("express");
const dropbox = require('dropbox');
const bodyParser = require("body-parser");

let app = new express();




app.use(bodyParser.json());

app.get("/", function (req, resp) {

    let dbx = new dropbox.Dropbox({ accessToken: 'hjs1tcbawb1s604', fetch: fetch });
    dbx.filesListFolder({ path: '' })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    resp.send("<h1>Welcome to NodeJs server app</h1>");
});

app.get("/rest/apps/list/:id", (req, resp) => {
    resp.send('id: ' + req.params.id);
});



// Start server
app.listen('localhost', 3000, () => {
    console.log(`Server running at http://127.0.0.1:8080/`);
});