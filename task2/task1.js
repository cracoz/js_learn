"use strict";

let money;
let time;

money = prompt("Ваш бюджет на месяц?", 150);
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-09-14");

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false,
};

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

appData.moneyPerDay = appData.budget/30;

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный достаток");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний достаток");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий достаток");
} else {
    console.log("Произошла ошибка");
}
