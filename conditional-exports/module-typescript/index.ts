
export { Hello } from './shared.js';

export async function hello() {
    console.log('in ES6');
    return "Hello, world!";
}

export function func1() {
    return "Synchronous ES6 function";
}