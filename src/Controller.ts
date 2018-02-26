import { Alerts } from "./Model"; // import the Model module.
// same as -- import * as M1 from "./Mode";--
import * as $ from "jquery"; // import jquery -- * as $ -- means import all object jquery as subset of $.

const m = new Alerts();
//const sjOb;

//m.Alerts = ['Great new feature']; will give me an error
m.Messages = ['Great new feature']; // because it needs to define object property specifically in Typescript.
//sjOb.Alerts = ['Great new feature']; // this is legal because ??
// m.Messages = 'Great new feature'; // if property definition is 'string' this is required.

export function DisplayAlerts(){
    $("#alerts").append(m.Messages.join());
}