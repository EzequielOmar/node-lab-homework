import { CustomEventEmitter } from "./CustomEventEmitter";

let eventName = "testEvent";

let first = () => console.log("first");
let second = (str: string) => console.log("second with param string: " + str);
let third = (number: number) =>
  console.log("third with param number: " + number);

let emitter = new CustomEventEmitter();

//* Append listeners to event
emitter.on(eventName, second);
emitter.on(eventName, third);
emitter.prependListener(eventName, first);

//* Emit event
emitter.emit(eventName, ["stringTest", 123456]);

//* Remove one listener to event
emitter.removeListener(eventName, second);

//* Emit event
emitter.emit(eventName);

/**
Current Output:

first
second with param string: stringTest,123456
third with param number: stringTest,123456
first
third with param number: undefined
*/