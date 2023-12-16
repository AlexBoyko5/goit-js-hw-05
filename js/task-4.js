// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів.Наприклад, { apples: 2, grapes: 4 }.
//     containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.


// function isEnoughCapacity(products, containerSize) {
//     // Перебираємо product через ключі об'єкта products за допомогою for...of
//     for (const productName of Object.keys(products)) {
//         const productQuantity = products[productName]; //  Отримуємо значення (значення властивості),
//         // що відповідає ключу productName в об'єкті products
//         // Якщо кількість товару більша за доступний об'єм контейнера, повертаємо false
//         if (productQuantity > containerSize) {
//             return false;
//         }
//     }
//     // Якщо всі товари поміщаються в контейнер, повертаємо true
//     return true;
// }

// якщо писати так,
// if (productQuantity <= containerSize) {
//     return true;
// } return false;
// то якщо перший товар має кількість, яка не перевищує containerSize,
//     тоді цей код відразу ж поверне true без перевірки інших товарів.
// Однак якщо перший товар не вміщується, тоді функція поверне false без перевірки інших товарів.
// оскільки потрібно перевірити всі товари та повернути true лише тоді,
//     коли всі товари вміщуються, краще використовувати цикл для перевірки кожного товару
// та повертати false лише після перевірки всіх товарів.

//     Вариант 2:
// function isEnoughCapacity(products, containerSize) {
//     let totalProducts = 0;
//     for (let product in products) {
//         totalProducts += products[product];
//     }
//     return totalProducts <= containerSize;
// }


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false