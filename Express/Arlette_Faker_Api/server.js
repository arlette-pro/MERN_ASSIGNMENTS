const express = require('express');
const app = express();

const {faker} = require ('@faker-js/faker');

const port = 8080;


app.listen(port, () => console.log(`Listening on port: ${port}`))