'use_strict';

var express = require('express');
var app = express();

app.use('/', express.static('static'));
app.use('/resources', express.static('node_modules/openui5.runtime.downloader/lib/1.46.9/resources'));

app.listen(3000, function () {
    console.log('OpenUI5 on NodeJS example app is listening on port 3000!');
});