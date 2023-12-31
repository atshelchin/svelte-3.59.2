export { default as compile } from './compile/index';
export { default as parse } from './parse/index';
export { default as preprocess } from './preprocess/index';
export { walk } from 'estree-walker';

export const VERSION: string = '__VERSION__';
// additional exports added through generate-type-definitions.js
