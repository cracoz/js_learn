"use strict";

let money;
let time;

money = prompt("Ваш бюджет на месяц?", 150);
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-09-14");

let appData = {
    "money": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false,
};

let item = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = prompt("Во сколько обойдется?", "0");

appData.expenses[item] = cost;

alert("Бюджет на 1 день: " + money/30);
