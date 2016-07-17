/// <reference path="react/react.d.ts" />
/// <reference path="react/react-dom.d.ts" />

declare namespace PostcssJs {
    function sync(plugins: any[]): Function;
}

declare module 'postcss-js' {
    export = PostcssJs;
}

declare var autoprefixer: any;

declare module 'autoprefixer' {
    export = autoprefixer;
}

interface ObjectConstructor {
    assign<T, U>(target: T, source: U): T & U;
    assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
}