// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let x = "";
for (let i = 20; i <= 30; i += 0.5) {
    x += i + " ";
}
console.log (x);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
for (let i = 10; i <= 100; i += 10) {
    console.log (`${i} usd = ${i * 27} uah`);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let N = 300;
for (let i = 1; i <= 100; i++) {
   if (i * i <= N) {
    console.log (i)
   } else {
        break;
    }

}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)
let y = 5;
let simpleNumber = y > 1;

for (let i = 2; i <= y / 2; i++ ) {
    if (y % i === 0){
        simpleNumber = false;
        break;
    }
}

console.log(`${y} is ${simpleNumber ? "" : 'not '} a simple number `);

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let number = 65;
let n = 1;
let result = false;

while ( n <= number) {
    if (n === number) {
        result = true;
        break;
    }
    n *= 3;
}
console.log (`${number} ${result ? "can" : "cannot"} be obtained by raising the number 3 to a certain power`);