import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoItem from './TodoItem';
import {Todo} from '../stores/TodoStore'

export default class MainSection extends React.Component<{
    allTodos: {[id: string]: Todo};
    areAllComplete: boolean;
}, {}> {

    render(): JSX.Element {
        let allTodos = this.props.allTodos,
            todos: JSX.Element[] = [];
        // This section should be hidden by default
        // and shown when there are todos.
        if (Object.keys(allTodos).length < 1) {
            return null;
        }

        for (var id in allTodos) {
            todos.push(<TodoItem todo={allTodos[id]} />);
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={() => {
                        this.onToggleCompleteAll();
                    }}
                    checked={this.props.areAllComplete}
                />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">{todos}</ul>
            </section>
        );
    }

    private onToggleCompleteAll(): void {
        TodoActions.toggleCompleteAll();
    }

}
