/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START vision_quickstart]
// Imports the Google Cloud client library

require('dotenv').load();
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const vision = require('@google-cloud/vision');
//
//
// // Creates a client
const client1 = new vision.ImageAnnotatorClient();
// console.log(client);
//
// // Performs label detection on the image file
const cors = require('cors');

const express = require('express');
const app = express();
const say = require('say')


// Creates a client

// Construct the request

var info1;
var info2;
var info3;
var info4;
var info5;
var info6;

async function main() {
  var [result1] = await client1.textDetection('./public/power.png');
  var [result2] = await client1.textDetection('./public/accel.jpg');
  var [result3] = await client1.textDetection('./public/perf.jpg');
  var [result4] = await client1.textDetection('./public/brightLed.jpg');
  var [result5] = await client1.textDetection('./public/button.jpg');
  var [result6] = await client1.textDetection('./public/inverter.jpg');

  info1 = Object.entries(result1)[4][1][0].description;
  info2 = Object.entries(result2)[4][1][0].description;
  info3 = Object.entries(result3)[4][1][0].description;
  info4 = Object.entries(result4)[4][1][0].description;
  info5 = Object.entries(result5)[4][1][0].description;
  info6 = Object.entries(result6)[4][1][0].description;


  console.log(info1);
  console.log(info2);
  console.log(info3);
  console.log(info4);
  console.log(info5);
  console.log(info6);

};
main().catch(err => {
  console.error('ERROR:', err);
});

// app.use(express.static('/public'));

app.get('/', (req, res) => {
  response.json({
    "description": "My back end is up and running"
  })
  res.send('ola');
  // res.send('<img src="p1Power.jpg" />', "hello");
});

app.post('/getPower', function(req, res) {
  var response = info1;
  res.send(response);

});

app.post('/getAccel', function(req, res) {
  var response = info2;
  res.send(response);

});

app.post('/getPerf', function(req, res) {
  var response = info3;
  res.send(response);

});

app.post('/getLed', function(req, res) {
  var response = info4;
  res.send(response);

});

app.post('/getButton', function(req, res) {
  var response = info5;
  res.send(response);

});

app.post('/getInverter', function(req, res) {
  var response = info6;
  res.send(response);

});


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
//Set the response HTTP header with HTTP status and Content type

//listen for request on port 3000, and as a callback function have the port listened on logged
