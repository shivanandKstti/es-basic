// "use strict";
// const username = 'ss';
// console.log(username);
const name = 'Max';
// alert(name);
/**
 * detaoils depends on the browser
 * interpreter
 * compliler 
 * jit
 * parses code and starts execution
 * just in time execute and run script
 * in computer - complied machine code.
 * browser faclities api provides
 * browser provides communucation bridges
 */
function getName() {
    return prompt('what is your name', 'shiv');
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();
/**
 * execution    ^
 * | 1. stack     |
 * | 2. anonymous |
 * | 3. greet()   |   
 * | 4. getName() |   
 * | 5. prompt()  |
 *  
 */