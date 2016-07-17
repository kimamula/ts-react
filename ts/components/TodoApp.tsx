import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import TodoStore, {Todo} from '../stores/TodoStore';
import style from './style';
import { todoApp, info } from './todoAppStyle';

class TodoApp extends React.Component<{}, {
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
    	return <div>
            <section className={todoApp}>
                <Header />
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                />
                <Footer allTodos={this.state.allTodos} />
            </section>
            <footer className={info}>
                <p>Double-click to edit a todo</p>
            </footer>
            <style.Element />
        </div>;
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

export default style.component(TodoApp);