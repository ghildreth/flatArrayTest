module.exports = flattenUsingStack;
module.exports = flattenRecusively;
// MDN states this is an experimental technology:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// So its not supported in some browsers (Edge, IE, Edge Mobile, Samsung Internet), and Node.js
// But it looks like this might be a part of ECMAScript soon enough...

// Here's an example of the Array.prototype.flat;
// var newArray = arr.flat([depth]);

// function flattenArray(arr, x) {
//     return arr.flat(x);
// }

// Without too much code we can leverage the power of Array.prototype.reduce with simple recursion to gain the same effect: 

// isArray() is the conditional check of our tenary operator
// if TRUE we call we have the function call itself which works for an 
// arbitary number of arrays
// for example:

// var arrExample1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenRecusively(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenRecusively(val)) : acc.concat(val), []);
}

//console.log(flattenRecusively(arrExample1));

// Otherwise we can implement a non recursive function here:

function flattenUsingStack (arr) {
    const stack = [...arr];
    const flattenedResult = [];

    while(stack.length) {
        // we use pop() to "pop" the first value from the stack
        const runningStack = stack.pop();
        // if we find an array we push it back on the stack until it pops off properly
        if (Array.isArray(runningStack)) {
            stack.push(...runningStack);
        } else  {
            // once everything is out of the array we add it to our result
            flattenedResult.push(runningStack)
        }
    }
    // This method requires us to restore the initial order
    return flattenedResult.reverse();
}
// console.log(flattenUsingStack(arrExample1));
