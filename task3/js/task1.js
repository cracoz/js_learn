"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 150);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-09-14");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 150);
    }
}

start();

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let item = prompt("Введите обязательную статью расходов в этом месяце", "");
        let cost = +prompt("Во сколько обойдется?", "0");

        if ( typeof(item) === 'string' && typeof(item) != null && typeof(cost) != null
        && item != "" && cost != "" && item.length < 50) {
            appData.expenses[item] = cost;
            console.log("done");
        } else {
            i--;
            continue;
        }
    }
}

chooseExpenses();


// let i = 0;
// while (i < 2) {
//     let item = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let cost = +prompt("Во сколько обойдется?", "0");

//     if ( typeof(item) === 'string' && typeof(item) != null && typeof(cost) != null
//     && item != "" && cost != "" && item.length < 50) {
//         appData.expenses[item] = cost;
//         console.log("done");
//         i++
//     } else {
//         continue;
//     }
// }

// let i = 0;
// do {
//     let item = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let cost = +prompt("Во сколько обойдется?", "0");

//     if ( typeof(item) === 'string' && typeof(item) != null && typeof(cost) != null
//     && item != "" && cost != "" && item.length < 50) {
//         appData.expenses[item] = cost;
//         console.log("done");
//         i++
//     } else {
//         continue;
//     }
// }
// while (i < 2)

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Бюджет на 1 день: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный достаток");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний достаток");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий достаток");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings) {}
    let save = +prompt("Какая сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <=3; i++) {
        let OptExpens = prompt("Статья необязательных расходов?");
        appData.OptExpens[i] = OptExpens
    }
}
