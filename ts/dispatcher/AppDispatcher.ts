/// <reference path="../../typings/tsd.d.ts" />
import {TsEventEmitter, EventBase, Event0, Event1, Event2} from 'ts-eventemitter';

export interface AppDispatcher extends TsEventEmitter {
    event(name: 'create'): Event1<AppDispatcher, string>;
    event(name: 'complete'): Event1<AppDispatcher, string>;
    event(name: 'destroy'): Event1<AppDispatcher, string>;
    event(name: 'destroyCompleted'): Event0<AppDispatcher>;
    event(name: 'toggleCompleteAll'): Event0<AppDispatcher>;
    event(name: 'undoComplete'): Event1<AppDispatcher, string>;
    event(name: 'updateText'): Event2<AppDispatcher, string, string>;
    event(name: string): EventBase<AppDispatcher>;
}

var AppDispatcher: AppDispatcher = TsEventEmitter.create();

export default AppDispatcher;
