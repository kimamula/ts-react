import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput';
import {Todo} from '../stores/TodoStore'

export default class TodoItem extends React.Component<{index: number, todo: Todo, actions: TodoActions}, {isEditing: boolean;}> {

    constructor(props: {index: number, todo: Todo, actions: TodoActions}) {
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
                    value={todo.getText()}
                />;
        }

        return (
            <li
                className={
                    todo.isCompleted() ?
                        'completed' :
                        (this.state.isEditing ? 'editing' : null)
                }
                key={this.props.index}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.isCompleted()}
                        onChange={() => {
                            this.onToggleComplete();
                        }}
                    />
                    <label onDoubleClick={() => {
                        this.onDoubleClick();
                    }}>
                        {todo.getText()}
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
        this.props.actions.toggleComplete(this.props.index, this.props.todo);
    }

    private onDoubleClick(): void {
        this.setState({'isEditing': true});
    }

    private onSave(text: string): void {
        this.props.actions.updateText(this.props.index, text);
        this.setState({'isEditing': false});
    }

    private onDestroyClick(): void {
        this.props.actions.destroy(this.props.index);
    }

}
