const a = +prompt("Введите первое число" + " ");
const b = Number(prompt("Введите второе число" + " "));
let action = prompt("Какое математическое действие будем выполнять?" + " ");

if (action === "+") {
    console.log(a + b);
} else if(action === "-") {
    console.log(a - b);
} else if(action === "*") {
    console.log(a * b);
} else if(action === "/") {
    console.log(a / b);
} else {
    alert(`Мы не можем выполнить даную команду ${action}`);
}
