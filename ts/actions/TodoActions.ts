import AppDispatcher from '../dispatcher/AppDispatcher';
import {Todo} from '../stores/TodoStore';

module TodoActions {

    export function create(text: string): void {
        AppDispatcher.event('create').emit(text);
    }

    export function updateText(id: string, text: string): void {
        AppDispatcher.event('updateText').emit(id, text);
    }

    export function toggleComplete(todo: Todo): void {
        if (todo.complete) {
            AppDispatcher.event('undoComplete').emit(todo.id);
        } else {
            AppDispatcher.event('complete').emit(todo.id);
        }
    }

    export function toggleCompleteAll(): void {
        AppDispatcher.event('toggleCompleteAll').emit();
    }

    export function destroy(id: string): void {
        AppDispatcher.event('destroy').emit(id);
    }

    export function destroyCompleted(): void {
        AppDispatcher.event('destroyCompleted').emit();
    }

}

export default TodoActions;
