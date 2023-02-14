let one = +prompt("Пароль");
let password = 7777;
let i = 0;

while (i < 9) {

    if (one !== password) {
        ask = + prompt("ведите пороль");
        i++
    } else if (one === password) {
        alert("go")
        break;
    }
}