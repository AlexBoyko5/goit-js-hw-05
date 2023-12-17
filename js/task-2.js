// //?Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
// //?перший параметр users — масив об’єктів користувачів
// //?другий параметр friendName — ім’я друга для пошуку.
// //?Функція має повертати масив усіх користувачів із масиву users,
// //?у яких є друг з іменем friendName.
// //?Друзі кожного користувача зберігаються у властивості friends.
// //?Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.
// //?  Поради:
// //?Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// //?Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// //?Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// //?У консоль будуть виведені результати її роботи.//

const getUsersWithFriend = (users, friendName) =>
    // Використовуємо метод filter() для створення нового масиву users, що містить тільки тих користувачів,
    // у яких є друг із вказаним ім'ям (friendName)
    users.filter(user =>
        // Використовуємо метод includes() для перевірки, чи має поточний користувач друга із вказаним ім'ям
        user.friends.includes(friendName)
    );
//? У цьому коді usersFilter використовується для створення нового масиву користувачів(users),
//?   які задовольняють умову, яку визначає функція, передана як другий аргумент.(friendName)
//?  У цьому випадку ця функція використовує user.friends.includes для перевірки того,
//? чи має поточний користувач друга з вказаним ім'ям (friendName).

// За допомогою циклу
// function getUsersWithFriend(users, friendName) {
//     const filteredUsers = [];
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         if (user.friends.includes(friendName)) {
//             filteredUsers.push(user);
//         }
//     }
//     return filteredUsers;
// }

const allUsers = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"]
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"]
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"]
    }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []