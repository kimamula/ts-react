import * as ReactDom from 'react-dom';
import * as React from 'react';
import TodoApp from './components/TodoApp';

ReactDom.render(
    <TodoApp />,
    document.getElementById('todoapp')
);
