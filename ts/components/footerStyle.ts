import style from './style';

export const
    footer = style.registerStyle({
        color: '#777',
        padding: '0 15px',
        position: 'absolute',
        right: 0,
        bottom: -31,
        left: 0,
        height: 20,
        zIndex: 1,
        textAlign: 'center',
        '&:before': {
            content: `''`,
            position: 'absolute',
            right: 0,
            bottom: 31,
            left: 0,
            height: 50,
            zIndex: -1,
            boxShadow: [
                '0 1px 1px rgba(0, 0, 0, 0.3)',
                '0 6px 0 -3px rgba(255, 255, 255, 0.8)',
                '0 7px 1px -3px rgba(0, 0, 0, 0.3)',
                '0 43px 0 -6px rgba(255, 255, 255, 0.8)',
                '0 44px 2px -6px rgba(0, 0, 0, 0.2)'
            ].join(',')
        }
    }),
    todoCount = style.registerStyle({
        float: 'left',
	    textAlign: 'left'
    });
