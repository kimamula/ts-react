import * as ReactDom from 'react-dom';
import * as React from 'react';
import TodoApp from './components/TodoApp';
import style from './components/style';

style.registerRule('html, body', {
    margin: 0,
	padding: 0
});

style.registerRule('body', {
    font: `14px 'Helvetica Neue', Helvetica, Arial, sans-serif`,
	lineHeight: '1.4em',
	background: `#eaeaea url('todomvc-common/bg.png')`,
	color: '#4d4d4d',
	width: 550,
	margin: '0 auto',
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    MsFontSmoothing: 'antialiased',
    OFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased'
});

ReactDom.render(
    <TodoApp />,
    document.getElementById('todoapp')
);
