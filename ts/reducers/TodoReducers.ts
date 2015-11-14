import Reducers, {ReducerAccesor} from './Reducers';
import {Todo, TodoState} from '../stores/TodoStore';

type TodoReducerAccesor<Payload> = ReducerAccesor<Payload, TodoState, TodoReducers>;

export interface TodoReducers {
    for(action: 'create'): TodoReducerAccesor<{text: string}>;
    for(action: 'updateText'): TodoReducerAccesor<{index: number, text: string}>;
    for(action: 'complete'): TodoReducerAccesor<{index: number}>;
    for(action: 'undoComplete'): TodoReducerAccesor<{index: number}>;
    for(action: 'toggleCompleteAll'): TodoReducerAccesor<{}>;
    for(action: 'destroy'): TodoReducerAccesor<{index: number}>;
    for(action: 'destroyCompleted'): TodoReducerAccesor<{}>;
    for(action: string): void;
}

export namespace TodoReducersFactory {
    export function create(): TodoReducers {
        const todoReducerRepository: TodoReducers = new Reducers<TodoState>();

        // Register reducers
        todoReducerRepository.for('create').register((payload: {text: string}, state: TodoState) => {
            const text = payload.text.trim();
            if (text !== '') {
                return [...state, new Todo(false, text)];
            }
            return state;
        }).for('toggleCompleteAll').register((payload: {}, state: TodoState) => {
            const allCompleted = state.every((todo) => todo.isCompleted());
            return state.map((todo) => todo.setCompleted(!allCompleted));
        }).for('undoComplete').register((payload: {index: number}, state: TodoState) =>
            state.map((todo, index) =>
                index === payload.index ? todo.setCompleted(false) : todo
            )
        ).for('complete').register((payload: {index: number}, state: TodoState) =>
            state.map((todo, index) =>
                index === payload.index ? todo.setCompleted(true) : todo
            )
        ).for('updateText').register((payload: {index: number, text: string}, state: TodoState) => {
            const text = payload.text.trim();
            if (text !== '') {
                return state.map((todo, index) =>
                    index === payload.index ? todo.setText(text) : todo
                );
            }
            return state;
        }).for('destroy').register((payload: {index: number}, state: TodoState) =>
            state.filter((todo, index) => index !== payload.index)
        ).for('destroyCompleted').register((payload: {}, state: TodoState) =>
            state.filter((todo) => !todo.isCompleted())
        );

        return todoReducerRepository;
    }
}

export default TodoReducers;
