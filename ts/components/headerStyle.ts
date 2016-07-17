import style, { prefixer } from './style';
import { editDefBase } from './todoItemStyle';

export const
    header = style.registerStyle({
        paddingTop: 15,
        borderRadius: 'inherit',
        '&:before': {
            content: '',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: 15,
            zIndex: 2,
            borderBottom: '1px solid #6c615c',
            background: [
                '#8d7d77',
                '-webkit-gradient(linear, left top, left bottom, from(rgba(132, 110, 100, 0.8)),to(rgba(101, 84, 76, 0.8)))',
                '-webkit-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8))',
                'linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8))'
            ],
            filter: `progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#9d8b83', EndColorStr='#847670')`,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1
        }
    }),
    title = style.registerStyle(Object.assign(
        {
            position: 'absolute',
            top: -120,
            width: '100%',
            fontSize: 70,
            fontWeight: 'bold',
            textAlign: 'center',
            color: [
                '#b3b3b3',
                'rgba(255, 255, 255, 0.3)'
            ],
            textShadow: '-1px -1px rgba(0, 0, 0, 0.2)'
        },
        prefixer({
            textRendering: 'optimizeLegibility'
        })
    )),
    newTodo = style.registerStyle(Object.assign(
        {},
        editDefBase,
        {
            padding: '16px 16px 16px 60px',
            border: 'none',
            background: 'rgba(0, 0, 0, 0.02)',
            zIndex: 2,
            boxShadow: 'none',
            '&::-webkit-input-placeholder': {
                fontStyle: 'italic'
            },
            '&::-moz-placeholder': {
                fontStyle: 'italic',
                color: '#a9a9a9'
            }
        }
    ));
