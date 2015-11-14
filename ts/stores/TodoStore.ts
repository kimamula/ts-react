import Store from './store';

export default class TodoStore extends Store<TodoState> {
}

export class Todo {
    constructor(private completed: boolean, private text: string) {
    }

    isCompleted(): boolean {
        return this.completed;
    }

    setCompleted(complete: boolean): Todo {
        return new Todo(complete, this.text);
    }

    getText(): string {
        return this.text;
    }

    setText(text: string): Todo {
        return new Todo(this.completed, text);
    }
}

export type TodoState = Todo[];
