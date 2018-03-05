"use strict";
exports.__esModule = true;
var Model_1 = require("./Model"); // import the Model module.
// same as -- import * as M1 from "./Mode";--
var $ = require("jquery"); // import jquery -- * as $ -- means import all object jquery as subset of $.
var m = new Model_1.Alerts();
//const sjOb;
//m.Alerts = ['Great new feature']; will give me an error
m.Messages = ['Great new feature']; // because it needs to define object property specifically in Typescript.
//sjOb.Alerts = ['Great new feature']; // this is legal because ??
// m.Messages = 'Great new feature'; // if property definition is 'string' this is required.
function DisplayAlerts() {
    $("#alerts").append(m.Messages.join());
}
exports.DisplayAlerts = DisplayAlerts;
DisplayAlerts();
