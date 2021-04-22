
export async function hello() {
    console.log('in ES6');
    return "Hello, world!";
}

export { func1 } from './shared.js';

// TBD - need to use Babel for this
export function sync() {
    console.log('in ES6');
    return "Synchronized!";
}