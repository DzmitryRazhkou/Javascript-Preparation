// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//     Hoisted functions can be used before their declaration.
//     As you can see, the JavaScript interpreter allows you to use the function before the point at which it was declared in the source code.
//     This is extremely useful as the function can be called before defining it. One can then define the function anywhere in the program code

performSearch()
function performSearch(){
    console.log("This is Blast")
}