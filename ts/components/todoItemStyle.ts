import style, { prefixer, webkitMediaQuery } from './style';

export const
    editDefBase = {
        position: 'relative',
        margin: 0,
        width: '100%',
        fontSize: 24,
        fontFamily: 'inherit',
        lineHeight: '1.4em',
        outline: 'none',
        color: 'inherit',
        padding: 6,
        border: '1px solid #999',
        boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',
    },
    edit = style.registerStyle(Object.assign({}, editDefBase, {
        display: 'none',
        width: 506,
        padding: '13px 17px 12px 17px',
        margin: '0 0 0 43px'
    })),
    toggle = style.registerStyle(Object.assign(
        {
            textAlign: 'center',
            width: 40,
            /* auto, since non-WebKit browsers doesn't support input styling */
            height: 'auto',
            position: 'absolute',
            top: 0,
            bottom: 0,
            margin: 'auto 0',
            /* Mobile Safari */
            border: 'none',
            '&:after': {
                content: `'✔'`,
                /* 40 + a couple of pixels visual adjustment */
                lineHeight: '43px',
                fontSize: 20,
                color: '#d9d9d9',
                textShadow: '0 -1px 0 #bfbfbf'
            },
            '&:checked:after': {
                color: '#85ada7',
                textShadow: '0 1px 0 #669991',
                bottom: 1,
                position: 'relative'
            },
            [webkitMediaQuery]: {
                background: 'none',
                height: 40
            }
        },
        prefixer({
            appearance: 'none'
        })
    )),
    label = style.registerStyle(Object.assign(
        {
            whiteSpace: 'pre',
            wordBreak: 'break-word',
            padding: '15px 60px 15px 15px',
            marginLeft: 45,
            display: 'block',
            lineHeight: 1.2
        },
        prefixer({
            transition: 'color 0.4s'
        })
    )),
    destroy = style.registerStyle(Object.assign(
        {
            display: 'none',
            position: 'absolute',
            top: 0,
            right: 10,
            bottom: 0,
            width: 40,
            height: 40,
            margin: 'auto 0',
            fontSize: 22,
            color: '#a88a8a',
            border: 0,
            background: 'none',
            '&:hover': Object.assign(
                {
                    textShadow: '0 0 1px #000, 0 0 10px rgba(199, 107, 107, 0.8)'
                },
                prefixer({
                    transform: 'scale(1.3)'
                })
            ),
            '&:after': {
            	content: `'✖'`
            }
        },
        prefixer({
            transition: 'all 0.2s'
        })
    )),
    view = 'view',
    editing = 'editing',
    completed = 'completed',
    todoItem = style.registerStyle({
        position: 'relative',
	    fontSize: 24,
	    borderBottom: '1px dotted #ccc',
        [`&.${editing}`]: {
            borderBottom: 'none',
	        padding: 0
        },
        '&:last-child': {
            borderBottom: 'none'
        },
        [`&.${editing}:last-child`]: {
            marginBottom: -1
        },
        [`&.${editing} .${edit}`]: {
            display: 'block'
        },
        [`&.${editing} .${view}`]: {
            display: 'none'
        },
        [`&:hover .${destroy}`]: {
            display: 'block'
        },
        [`&.${completed} .${label}`]: {
            color: '#a9a9a9',
	        textDecoration: 'line-through'
        }
    });
