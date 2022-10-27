export class CustomEventEmitter {
  private _listeners: {};

  constructor() {
    this._listeners = {};
  }

  emit(eventName: string, ...args: any[]) {
    if (eventName === "" || !this._listeners[eventName]) return;
    for (let i = 0; i < this._listeners[eventName].length; i++) {
      //! console.log(this._listeners[eventName][i]['arguments']);
      //* Trying to acces arguments (to route params to correct functions) with this line, throw this error:
      //! TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed
      //! on strict mode functions or the arguments objects for calls to them
      this._listeners[eventName][i](...args);
    }
  }

  on(eventName: string, listener: Function) {
    if (eventName === "") return;
    if (!this._listeners[eventName]) this._listeners[eventName] = [];
    this._listeners[eventName].push(listener);
  }

  prependListener(eventName: string, listener: Function) {
    if (eventName === "") return;
    if (!this._listeners[eventName]) this._listeners[eventName] = [];
    this._listeners[eventName].unshift(listener);
  }

  removeListener(eventName: string, listener: Function) {
    if (eventName === "" || !this._listeners[eventName]) return;
    //* Filter list and overwrite it, in order to remove the listener
    this._listeners[eventName] = this._listeners[eventName].filter(
      (l: Function) => {
        if (l !== listener) return l;
      }
    );
  }
}
