import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem';
import {Todo, TodoState} from '../stores/TodoStore'

export default class MainSection extends React.Component<{state: TodoState, actions: TodoActions}, {}> {

    render(): JSX.Element {
        // This section should be hidden by default
        // and shown when there are todos.
        if (this.props.state.length === 0) {
            return null;
        }

        const todos: JSX.Element[] = [],
            actions = this.props.actions;
        let areAllCompleted = true;

        this.props.state.forEach((todo, index) => {
            if (!todo.isCompleted()) {
                areAllCompleted = false;
            }
            todos.push(<TodoItem {...{todo, index, actions}} />);
        });

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={() => {
                        this.onToggleCompleteAll();
                    }}
                    checked={areAllCompleted}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">{todos}</ul>
            </section>
        );
    }

    private onToggleCompleteAll(): void {
        this.props.actions.toggleCompleteAll();
    }

}
