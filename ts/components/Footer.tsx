import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import {Todo} from '../stores/TodoStore'

export default class Footer extends React.Component<{allTodos: {[id: string]: Todo}}, {}> {

    render(): JSX.Element {
        let allTodos = this.props.allTodos,
            completed = 0,
            itemsLeft = 0,
            itemsLeftPhrase = 'left',
            clearCompletedButton: JSX.Element;

        if (Object.keys(allTodos).length === 0) {
            return null;
        }

        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            } else {
                itemsLeft++;
            }
        }

        itemsLeftPhrase = (itemsLeft === 1 ? ' item ' : ' items ') + itemsLeftPhrase;

        if (completed) {
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
                    {itemsLeftPhrase}
                </span>
                {clearCompletedButton}
            </footer>
        );
    }

    private onClearCompletedClick(): void {
        TodoActions.destroyCompleted();
    }

}
