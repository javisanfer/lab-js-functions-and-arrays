// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return number1;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    if (words.length === 0) {
        return null;
    } else if (words.length === 1) {
        return words[0];
    } else {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (word.length > longestWord.length) { 
                longestWord = word;
            }
        }
    }
    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    if (numbers.length === 0) {
        return sum;
    } else if (numbers.length === 1) {
        return numbers[0];
    } else {
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            sum += number;
        }
    }
    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    let sum = 0
    let average = 0
    if (numbers.length === 0) {
        return 0;
    } else if (numbers.length === 1) {
        return numbers[0]/1;
    } else {
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            sum += number;
        }
    }
    average = sum/numbers.length;
    return average
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, element) {
    if (words.length === 0) {
        return null;
    } else if (words.indexOf(element) !== -1) {
        return true;
    } else {
        return false;
    }
}
