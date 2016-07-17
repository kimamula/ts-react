import style, { prefixer, hidden, webkitMediaQuery } from './style';

export const
    main = style.registerStyle({
        position: 'relative',
        zIndex: 2,
        borderTop: '1px dotted #adadad'
    }),
    toggleAllLabel = hidden,
    toggleAll = style.registerStyle({
        position: 'absolute',
        top: -42,
        left: -4,
        width: 40,
        textAlign: 'center',
        /* Mobile Safari */
        border: 'none',
        '&:before': {
            content: `'»'`,
            fontSize: 28,
            color: '#d9d9d9',
            padding: '0 25px 7px'
        },
        '&:checked:before': {
            color: '#737373'
        },
        [webkitMediaQuery]: Object.assign(
            {
                background: 'none',
                top: -56,
                left: -15,
                width: 65,
                height: 41
            },
            prefixer({
                transform: 'rotate(90deg)',
                appearance: 'none'
            })
        )
    }),
    todoList = style.registerStyle({
        margin: 0,
        padding: 0,
        listStyle: 'none'
    });
