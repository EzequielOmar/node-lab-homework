"use strict";
exports.__esModule = true;
var CustomEventEmitter_1 = require("./CustomEventEmitter");
var eventName = "testEvent";
var first = function () { return console.log("first"); };
var second = function (str) { return console.log("second with param string: " + str); };
var third = function (number) {
    return console.log("third with param number: " + number);
};
var emitter = new CustomEventEmitter_1.CustomEventEmitter();
emitter.on(eventName, second);
emitter.on(eventName, third);
emitter.prependListener(eventName, first);
emitter.emit(eventName, ["stringTest", 123456]);
emitter.removeListener(eventName, second);
emitter.emit(eventName);
