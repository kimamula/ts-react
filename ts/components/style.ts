import { create } from 'react-free-style';
import * as postcssJs from 'postcss-js';
import * as autoprefixer from 'autoprefixer';

const style = create();

export const
    prefixer = postcssJs.sync([ autoprefixer ]),
    webkitMediaQuery = '@media screen and (-webkit-min-device-pixel-ratio:0)',
    hidden = style.registerStyle({
        display: 'none'
    });

export default style;
