/*const a = prompt("Введите первое число " + " ");
const b = prompt("Введите второе число " + " ");

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
*/


const a = prompt("Введите первое число" + " ");
const b = prompt("Введите второе число" + " ");
let action = prompt("Какое математическое действие будем выполнять?" + " ");

if (action == "+"){
    console.log(a + b);
} else if(action == "-"){
    console.log(a - b);
} else if(action == "*"){
    console.log(a * b);
} else if(action == "/"){
    console.log(a / b);
} else if(action !=="*"){
    alert("Мы не можем выполнить даную команду " + action );
} else if(action !=="+"){
    alert("Мы не можем выполнить даную команду " + action );
}else if(action !=="-"){
    alert("Мы не можем выполнить даную команду " + action );
} else if(action !=="/"){
    alert("Мы не можем выполнить даную команду " + action );
}