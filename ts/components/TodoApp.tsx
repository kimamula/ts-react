import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import TodoStore, {Todo, TodoState} from '../stores/TodoStore';
import TodoActions from '../actions/TodoActions';
import {TodoReducersFactory} from '../reducers/TodoReducers';

export default class TodoApp extends React.Component<{}, {state: TodoState}> {
    private actions: TodoActions;

    constructor(props: {}) {
        super(props);
        this.actions = new TodoActions(TodoReducersFactory.create());
        const store = new TodoStore(this.actions.observable, []);
        store.observable.subscribe(
          (state) => this.state ? this.setState({state}) : this.state = {state}
        );
    }

    render(): JSX.Element {
    	return (
            <div>
                <Header actions={this.actions}/>
                <MainSection state={this.state.state} actions={this.actions} />
                <Footer state={this.state.state} actions={this.actions}/>
            </div>
        );
    }
}
