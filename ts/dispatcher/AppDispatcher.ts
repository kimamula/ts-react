import TsEventEmitter from 'ts-eventemitter';

export interface AppDispatcher extends TsEventEmitter {
    event(name: 'create'): TsEventEmitter.Event1<this, string>;
    event(name: 'complete'): TsEventEmitter.Event1<this, string>;
    event(name: 'destroy'): TsEventEmitter.Event1<this, string>;
    event(name: 'destroyCompleted'): TsEventEmitter.Event0<this>;
    event(name: 'toggleCompleteAll'): TsEventEmitter.Event0<this>;
    event(name: 'undoComplete'): TsEventEmitter.Event1<this, string>;
    event(name: 'updateText'): TsEventEmitter.Event1<this, { id: string; text: string; }>;
    event(name: string): TsEventEmitter.Event;
}

var AppDispatcher: AppDispatcher = TsEventEmitter.create();

export default AppDispatcher;
