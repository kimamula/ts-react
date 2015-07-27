import * as React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoTextInput from './TodoTextInput';

export default class Header extends React.Component<{}, {}> {

    render(): JSX.Element {
        return (
            <header id="header">
                <h1>todos</h1>
                <TodoTextInput
                    id="new-todo"
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
