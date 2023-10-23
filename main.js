// 3 ci tapsiriq
// const numbers = [2, 4, 5, 9, 1];
// let minimum = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < minimum) {
//     minimum = numbers[i];
//   }
// }

// console.log("Ən minimim ədəd : " + minimum);

// 4 cu tapsiriq  
// const numbers = [2, 4, 5, 9, 1];
// let maximum = numbers[0]; 
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maximum) {
//     maximum = numbers[i];
//   }
// }

// console.log(" Ən böyük ədəd : " + maximum);

// 5 ci tapsiriq  
// const numbers = [2, 4, 5, 9, 1];
// let minimum = numbers[0]; 
// let minimumIndex = 0; 
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < minimum) {
//     minimum = numbers[i];
//     minimumIndex = i;
//   }
// }

// console.log(`Massivdə olan   ${minimum} in , indeksi ${minimumIndex} dür`);

// 6 ci tapsiriq 

// const numbers = [2, 4, 5, 9, 1];
// let maximum = numbers[0]; 
// let maximumIndex = 0; 
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maximum) {
//     maximum = numbers[i];
//     maximumIndex = i;
//   }
// }

// console.log(`Massivdə olan ${maximum} un , indeksi ${maximumIndex} dür `);

// 7 ci tapsiriq

// const numbers = [2, 4, 5, 9, 1];
// let oddIndexSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 1) { 
//     oddIndexSum += i;
//   }
// }

// console.log("Tək indekslərin cəmi: " + oddIndexSum);

// 8 ci tapsiriq 

// const text = "Mən Code Academy Tələbəsiyəm";
// let lowercaseText = "";

// for (let i = 0; i < text.length; i++) {
//   const char = text[i];
//   if (char >= 'A' && char <= 'Z') { 
//     lowercaseText += String.fromCharCode(char.charCodeAt(0) + 32); 
//   } else {
//     lowercaseText += char;
//   }
// }

// console.log(lowercaseText);

// 9 cu tapsiriq 

// const text = "            Mən Code Academydə Programing tədrisi alıram            ";
// let startIndex = 0;
// let endIndex = text.length - 1;

// while (text[startIndex] === ' ' && startIndex < endIndex) {
//   startIndex++;
// }

// while (text[endIndex] === ' ' && endIndex > startIndex) {
//   endIndex--;
// }

// let cleanedText = '';
// for (let i = startIndex; i <= endIndex; i++) {
//   cleanedText += text[i];
// }

// console.log(cleanedText);



