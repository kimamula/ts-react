/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import TodoStore, {Todo} from '../stores/TodoStore';

export default class TodoApp extends React.Component<{}, {
    allTodos: {[id: string]: Todo};
    areAllComplete: boolean;
}> {

    constructor(props: {}) {
        super(props);
        this.state = this.fetchLatestState();
    }

    componentDidMount(): void {
        TodoStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(): void {
        TodoStore.removeChangeListener(this.onChange);
    }

    render(): JSX.Element {
    	return (
            <div>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    }

    private onChange = () => {
        this.setState(this.fetchLatestState());
    };

    private fetchLatestState(): {
        allTodos: {[id: string]: Todo};
        areAllComplete: boolean;
    } {
        return {
            'allTodos': TodoStore.getAll(),
            'areAllComplete': TodoStore.areAllComplete()
        };
    }

}
