import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput';
import {Todo} from '../stores/TodoStore'

export default class TodoItem extends React.Component<{todo: Todo}, {isEditing: boolean;}> {

    constructor(props: {todo: Todo}) {
        super(props);
        this.state = {
            'isEditing': false
        };
    }

    render(): JSX.Element {
        let todo = this.props.todo,
            input: JSX.Element;

        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={(text: string) => {
                        this.onSave(text);
                    }}
                    value={todo.text}
                />;
        }

        return (
            <li
                className={
                    todo.complete ?
                        'completed' :
                        (this.state.isEditing ? 'editing' : null)
                }
                key={todo.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => {
                            this.onToggleComplete();
                        }}
                    />
                    <label onDoubleClick={() => {
                        this.onDoubleClick();
                    }}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={() => {
                        this.onDestroyClick();
                    }} />
                </div>
                {input}
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
