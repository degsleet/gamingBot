'use strict'

let userNumber;
let x;

const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const gamingBot = () => {
    x = 73
    const asking = () => {
        userNumber = prompt("Угадай число от 1 до 100")
        if (userNumber === null) {
            alert("Игра окончена")
            return
        }
        if (isNumber(userNumber)) {
            if (userNumber > x) {
                alert("Загаданное число меньше")
                asking()
            } else if (userNumber < x) {
                alert("Загаданное число больше")
                asking()
            } else {
                confirm("Поздравляю, Вы угадали!!!")
            }
        } else {
            alert("Введи число!")
            asking()
        }
    }
    asking()
}

gamingBot()
