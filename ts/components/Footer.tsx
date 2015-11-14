import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import {Todo, TodoState} from '../stores/TodoStore'

export default class Footer extends React.Component<{state: TodoState, actions: TodoActions}, {}> {

    render(): JSX.Element {
        const total = this.props.state.length,
            completed = this.props.state.filter((todo) => todo.isCompleted()).length,
            itemsLeft = total - completed;
        let clearCompletedButton: JSX.Element;

        if (total === 0) {
            return null;
        }

        if (completed > 0) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={() => {
                        this.onClearCompletedClick();
                    }}>
                    Clear completed ({completed})
                </button>;
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        {itemsLeft}
                    </strong>
                    item(s) left
                </span>
                {clearCompletedButton}
            </footer>
        );
    }

    private onClearCompletedClick(): void {
        this.props.actions.destroyCompleted();
    }

}
