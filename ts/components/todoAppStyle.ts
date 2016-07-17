import style from './style';

export const
    todoApp = style.registerStyle({
        background: [
            '#fff',
            'rgba(255, 255, 255, 0.9)'
        ],
        margin: '130px 0 40px 0',
        border: '1px solid #ccc',
        position: 'relative',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.15)',
        '&:before': {
            content: `''`,
            borderLeft: '1px solid #f5d6d6',
            borderRight: '1px solid #f5d6d6',
            width: 2,
            position: 'absolute',
            top: 0,
            left: 40,
            height: '100%'
        }
    }),
    info = style.registerStyle({
        margin: '65px auto 0',
        color: '#a6a6a6',
        fontSize: 12,
        textShadow: '0 1px 0 rgba(255, 255, 255, 0.7)',
        textAlign: 'center'
    });
