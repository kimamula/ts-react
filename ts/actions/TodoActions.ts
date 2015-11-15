import TodoReducers from '../reducers/TodoReducers';
import {Todo, TodoState} from '../stores/TodoStore';
import * as Rx from 'rx';

export default class TodoActions {
    private subject = new Rx.Subject<(state: TodoState) => TodoState>();
    observable = this.subject.asObservable();
    constructor(private todoReducers: TodoReducers) {
    }
    create(text: string): void {
        this.subject.onNext(this.todoReducers.for('create').applyPayload({text}));
    }

    updateText(index: number, text: string): void {
        this.subject.onNext(this.todoReducers.for('updateText').applyPayload({index, text}));
    }

    toggleComplete(index: number, todo: Todo): void {
        if (todo.isCompleted()) {
            this.subject.onNext(this.todoReducers.for('undoComplete').applyPayload({index}));
        } else {
            this.subject.onNext(this.todoReducers.for('complete').applyPayload({index}));
        }
    }

    toggleCompleteAll(): void {
        this.subject.onNext(this.todoReducers.for('toggleCompleteAll').applyPayload({}));
    }

    destroy(index: number): void {
        this.subject.onNext(this.todoReducers.for('destroy').applyPayload({index}));
    }

    destroyCompleted(): void {
        this.subject.onNext(this.todoReducers.for('destroyCompleted').applyPayload({}));
    }

}
