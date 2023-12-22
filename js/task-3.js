//? Напиши стрілочну функцію sortByDescendingFriendCount(users),
//? яка прийматиме один параметр users — масив об’єктів користувачів.
//? Функція має повертати масив усіх користувачів,
//? відсортованих за спаданням кількостій їх друзів(властивість friends).

const sortByDescendingFriendCount = (users) => {
    //* сортування масиву за спаданням кількості
    return users.sort((a, b) => b.friends.length - a.friends.length);
}

// Решение через цикл:

// function sortByDescendingFriendCount(users) {
//     for (let i = 0; i < users.length - 1; i++) {
//         for (let j = i + 1; j < users.length; j++) {
//             if (users[j].friends.length > users[i].friends.length) {
// Обмін елементів, якщо кількість друзів у наступному об'єкті більша
//                 const temp = users[i];
//                 users[i] = users[j];
//                 users[j] = temp;
//             }
//         }
//     }
//     return users;
// }

console.log(
    sortByDescendingFriendCount([
        {
            name: "Moore Hensley",
            friends: ["Sharron Pace"],
            gender: "male"
        },
        {
            name: "Sharlene Bush",
            friends: ["Briana Decker", "Sharron Pace"],
            gender: "female"
        },
        {
            name: "Ross Vazquez",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            gender: "male"
        },
        {
            name: "Elma Head",
            friends: ["Goldie Gentry", "Aisha Tran"],
            gender: "female"
        },
        {
            name: "Carey Barr",
            friends: ["Jordan Sampson", "Eddie Strong"],
            gender: "male"
        },
        {
            name: "Blackburn Dotson",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            gender: "male"
        },
        {
            name: "Sheree Anthony",
            friends: ["Goldie Gentry", "Briana Decker"],
            gender: "female"
        }
    ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]