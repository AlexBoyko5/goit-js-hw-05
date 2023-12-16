//^ Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
//^ Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.
//^ Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//^ У консоль будуть виведені результати її викликів.
//?====//?====//?=====//?====//?====//?====//?====//?====//?====//?====//?====//?====//?====//?====//?=====

const getUserNames = (users) => { // Cтрілочна функ та метод map - для отримання масиву імен користувачів
    return users.map(user => user.name);
}

// return users.map(user => user.name);
// Цей рядок коду використовує метод (map) для створення нового масиву, де кожен елемент є іменем користувача
// (users.map) викликає функцію, передану для обробки кожного елемента масиву (users.)
// Стрілочна функція user => user.name приймає кожний об'єкт користувача з масиву (users) і повертає його ім'я(user.name).
// Таким чином, return users.map(user => user.name); повертає масив імен користувачів.

// Расширенный вариант

// const getUserNames = users => {
//     const names = [];
//     for (const user of users) {
//         names.push(user.name);
//     }
//     return names;
// };


console.log(
    getUserNames([
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            balance: 2811
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            balance: 3821
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            balance: 3793
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            balance: 2278
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            balance: 3951
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            balance: 1498
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            balance: 2764
        },
    ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]