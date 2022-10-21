"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.CustomEventEmitter = void 0;
var CustomEventEmitter = /** @class */ (function () {
    function CustomEventEmitter() {
        this._listeners = {};
    }
    CustomEventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (eventName === "" || !this._listeners[eventName])
            return;
        this._listeners[eventName].map(function (listener) {
            console.log(listener);
            console.log(listener['arguments']);
            console.log(listener.toString());
            listener(__spreadArray([], args, true));
        });
    };
    CustomEventEmitter.prototype.on = function (eventName, listener) {
        if (eventName === "")
            return;
        if (!this._listeners[eventName])
            this._listeners[eventName] = [];
        this._listeners[eventName].push(listener);
    };
    CustomEventEmitter.prototype.prependListener = function (eventName, listener) {
        if (eventName === "")
            return;
        if (!this._listeners[eventName])
            this._listeners[eventName] = [];
        this._listeners[eventName].unshift(listener);
    };
    CustomEventEmitter.prototype.removeListener = function (eventName, listener) {
        if (eventName === "" || !this._listeners[eventName])
            return;
        this._listeners[eventName] = this._listeners[eventName].filter(function (l) {
            if (l !== listener)
                return l;
        });
    };
    return CustomEventEmitter;
}());
exports.CustomEventEmitter = CustomEventEmitter;
