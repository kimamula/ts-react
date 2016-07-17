import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput';
import {Todo} from '../stores/TodoStore'
import { edit, toggle, label, destroy, view, editing, completed, todoItem } from './todoItemStyle';

export default class TodoItem extends React.Component<{todo: Todo}, {isEditing: boolean;}> {

    constructor(props: {todo: Todo}) {
        super(props);
        this.state = {
            'isEditing': false
        };
    }

    render(): JSX.Element {
        const todo = this.props.todo,
            todoItemClassNames = [todoItem];

        if (todo.complete) {
            todoItemClassNames.push(completed);
        } else if (this.state.isEditing) {
            todoItemClassNames.push(editing);
        }

        return (
            <li className={todoItemClassNames.join(' ')}>
                <div className={view}>
                    <input
                        className={toggle}
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => {
                            this.onToggleComplete();
                        }}
                    />
                    <label className={label} onDoubleClick={() => {
                        this.onDoubleClick();
                    }}>
                        {todo.text}
                    </label>
                    <button className={destroy} onClick={() => {
                        this.onDestroyClick();
                    }} />
                </div>
                <TodoTextInput
                    className={edit}
                    onSave={(text: string) => {
                        this.onSave(text);
                    }}
                    value={todo.text}
                />
            </li>
        );
    }

    private onToggleComplete(): void {
        TodoActions.toggleComplete(this.props.todo);
    }

    private onDoubleClick(): void {
        this.setState({'isEditing': true});
    }

    private onSave(text: string): void {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({'isEditing': false});
    }

    private onDestroyClick(): void {
        TodoActions.destroy(this.props.todo.id);
    }

}
