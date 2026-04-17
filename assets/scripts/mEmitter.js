const EventEmitter = require('events');

class mEmitter {
    constructor() {
        this._emitter = new EventEmitter();
        this._emitter.setMaxListeners(100);
    }

    emit(event, ...args) {
        this._emitter.emit(event, ...args);
    }

    registerEvent(event, listener) {
        this._emitter.on(event, listener);
    }

    registerOnce(event, listener) {
        this._emitter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emitter.removeListener(event, listener);
    }

    destroy() {
        this._emitter.removeAllListeners();
        this._emitter = null;
        mEmitter.instance = null;
    }

    static getInstance() {
        if (!mEmitter.instance) {
            mEmitter.instance = new mEmitter();
        }
        return mEmitter.instance;
    }
}

mEmitter.instance = null;

module.exports = mEmitter;