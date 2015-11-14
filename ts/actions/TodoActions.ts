import TodoReducers from '../reducers/TodoReducers';
import {Todo, TodoState} from '../stores/TodoStore';
import * as Rx from 'rx';

export default class TodoActions {
    observable = new Rx.Subject<(state: TodoState) => TodoState>();
    constructor(private todoReducers: TodoReducers) {
    }
    create(text: string): void {
        this.observable.onNext(this.todoReducers.for('create').applyPayload({text}));
    }

    updateText(index: number, text: string): void {
        this.observable.onNext(this.todoReducers.for('updateText').applyPayload({index, text}));
    }

    toggleComplete(index: number, todo: Todo): void {
        if (todo.isCompleted()) {
            this.observable.onNext(this.todoReducers.for('undoComplete').applyPayload({index}));
        } else {
            this.observable.onNext(this.todoReducers.for('complete').applyPayload({index}));
        }
    }

    toggleCompleteAll(): void {
        this.observable.onNext(this.todoReducers.for('toggleCompleteAll').applyPayload({}));
    }

    destroy(index: number): void {
        this.observable.onNext(this.todoReducers.for('destroy').applyPayload({index}));
    }

    destroyCompleted(): void {
        this.observable.onNext(this.todoReducers.for('destroyCompleted').applyPayload({}));
    }

}
