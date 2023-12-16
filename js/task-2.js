// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
// які спортсмен споживав протягом тижня.Функція очікує один параметр: days — масив об’єктів.
// Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її викликів.


function calcAverageCalories(days) { //* Оголошуємо функцію. Функція очікує один - параметр: days — масив об’єктів/
    let totalCalories = 0; //* Змінна для зберігання заальної суми
    for (let i = 0; i < days.length; i++) { //*проходимо по всіх елементах масиву
        totalCalories += days[i].calories; //* Додаємо кількость Calories до загальної суми Calories,
        //* (додаємо кількість калорій, спожитих у день, до загальної кількості)
    }
    // return totalCalories / days.length; //*Обчислення середньодобового значення і повернення його
    return days.length === 0 ? 0 : totalCalories / days.length;
}
//*Более развернутый вариант
// function calcAverageCalories(days) {
//     let totalCalories = 0;
//     if (days.length === 0) {
//         return 0;
//     } else {
//         for (let i = 0; i < days.length; i++) {
//             totalCalories += days[i].calories;
//         }
//         return totalCalories / days.length;
//     }
// }



console.log(
    calcAverageCalories([
        { day: "monday", calories: 3010 },
        { day: "tuesday", calories: 3200 },
        { day: "wednesday", calories: 3120 },
        { day: "thursday", calories: 2900 },
        { day: "friday", calories: 3450 },
        { day: "saturday", calories: 3280 },
        { day: "sunday", calories: 3300 }
    ])
); // 3180

console.log(
    calcAverageCalories([
        { day: "monday", calories: 2040 },
        { day: "tuesday", calories: 2270 },
        { day: "wednesday", calories: 2420 },
        { day: "thursday", calories: 1900 },
        { day: "friday", calories: 2370 },
        { day: "saturday", calories: 2280 },
        { day: "sunday", calories: 2610 }
    ])
); // 2270

console.log(
    calcAverageCalories([])
); // 0