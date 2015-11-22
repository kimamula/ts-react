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
        // Register reducers
        return (<TodoReducers>new Reducers<TodoState>())
        .for('create').register(({text}, state) => {
            const _text = text.trim();
            if (_text !== '') {
                return [...state, new Todo(false, _text)];
            }
            return state;
        })
        .for('toggleCompleteAll').register(({}, state) => {
            const allCompleted = state.every((todo) => todo.isCompleted());
            return state.map((todo) => todo.setCompleted(!allCompleted));
        })
        .for('undoComplete').register(({index}, state) =>
            state.map((todo, _index) =>
                _index === index ? todo.setCompleted(false) : todo
            )
        )
        .for('complete').register(({index}, state) =>
            state.map((todo, _index) =>
                _index === index ? todo.setCompleted(true) : todo
            )
        )
        .for('updateText').register(({index, text}, state) => {
            const _text = text.trim();
            if (_text !== '') {
                return state.map((todo, _index) =>
                    _index === index ? todo.setText(_text) : todo
                );
            }
            return state;
        })
        .for('destroy').register(({index}, state) =>
            state.filter((todo, _index) => _index !== index)
        )
        .for('destroyCompleted').register(({}, state) =>
            state.filter((todo) => !todo.isCompleted())
        );
    }
}

export default TodoReducers;
