import AppDispatcher from '../dispatcher/AppDispatcher';
import {TsEventEmitter, EventBase, Event0} from 'ts-eventemitter';

module TodoStore {

    let todos: {[id: string]: Todo} = {};

    export function areAllComplete(): boolean {
        for (var id in todos) {
            if (!todos[id].complete) {
                return false;
            }
        }
        return true;
    }

    export function getAll(): {[id: string]: Todo} {
        return todos;
    }

    export function emitChange(): void {
        TodoEventEmitter.event('change').emit();
    }

    export function addChangeListener(callback: () => void): void {
        TodoEventEmitter.event('change').on(callback);
    }

    export function removeChangeListener(callback: () => void): void {
        TodoEventEmitter.event('change').removeListener(callback);
    }

    function create(text: string): void {
        let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        todos[id] = {
            'id': id,
            'complete': false,
            'text': text
        };
    }

    function updateAll(updates: {
        complete?: boolean;
        text?: string;
    }): void {
        for (var id in todos) {
            update(id, updates);
        }
    }

    function update(id: string, updates: {
        complete?: boolean;
        text?: string;
    }): void {
        let todo = todos[id];
        typeof updates.complete === 'undefined' || (todo.complete = updates.complete);
        updates.text && (todo.text = updates.text);
    }

    function destroy(id: string): void {
        delete todos[id];
    }

    function destroyCompleted(): void {
        for (var id in todos) {
            if (todos[id].complete) {
                destroy(id);
            }
        }
    }

    // Register callback to handle all updates
    AppDispatcher.event('create').on((text: string) => {
        text = text.trim();
        if (text !== '') {
            create(text);
            emitChange();
        }
    }).event('toggleCompleteAll').on(() => {
        if (areAllComplete()) {
            updateAll({ 'complete': false });
        } else {
            updateAll({ 'complete': true });
        }
        emitChange();
    }).event('undoComplete').on((id: string) => {
        update(id, { 'complete': false });
        emitChange();
    }).event('complete').on((id: string) => {
        update(id, { 'complete': true });
        emitChange();
    }).event('updateText').on((id: string, text: string) => {
        text = text.trim();
        if (text !== '') {
            update(id, { 'text': text });
            emitChange();
        }
    }).event('destroy').on((id: string) => {
        destroy(id);
        emitChange();
    }).event('destroyCompleted').on(() => {
        destroyCompleted();
        emitChange();
    });
}

interface TodoEventEmitter extends TsEventEmitter {
    event(name: 'change'): Event0<TodoEventEmitter>;
    event(name: string): EventBase<TodoEventEmitter>;
}

var TodoEventEmitter: TodoEventEmitter = TsEventEmitter.create();

export interface Todo {
    id: string;
    complete: boolean;
    text: string;
}

export default TodoStore;
