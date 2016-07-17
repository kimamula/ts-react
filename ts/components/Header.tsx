import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput';
import { header, title, newTodo } from './headerStyle';

export default class Header extends React.Component<{}, {}> {

    render(): JSX.Element {
        return (
            <header className={header}>
                <h1 className={title}>todos</h1>
                <TodoTextInput
                    className={newTodo}
                    placeholder="What needs to be done?"
                    onSave={(text: string) => {
                        this.onSave(text);
                    }}
                />
            </header>
        );
    }

    private onSave(text: string): void {
        if (text.trim()){
            TodoActions.create(text);
        }
    }

}
