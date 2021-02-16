//                                                                             Задачи №1          //

/*Функция принимает целое число 
и возвращает факториал этого числа.*/

module.exports.factorial =  function factorial(num) {
    return num ? num * factorial(num - 1) : 1;
}

/*Функция принимает строку и возвращает длину самого
длинного слова в этой строке.*/

module.exports.longestWord = function longestWord(str) {
    str = str.split(" ")
    let word = 0;

    for(let i = 0; i < str.length; i++){

        if(str[i].length > word){
            word = str[i].length;
        }
    }

    return word;
}

/*Функция принимает массив, состоящий из массивов целых
чисел и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.*/

module.exports.greatestNumberArray = function greatestNumberArray(arr) {
    let maxNumber = 0;
    let temporaryNumber = 0;
    let newArr = [];

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){
            temporaryNumber = arr[i][j];

            if(temporaryNumber > maxNumber){
                maxNumber = temporaryNumber;
            }
        }
        newArr.push(maxNumber)
    }

    return newArr;
}

/*Функция принимает строку и целое число и обрезает строку, 
если она длиннее заданной максимальной длины строки
и возвращает обрезанную строку с «…» в конце*/

module.exports.stringReduction = function stringReduction(str, num) {
    let res = "";

    if(str.length > num){

        for(let i=0; i<num; i++){
            res += str[i];
        }
    }
    else{
        res=str;
    }

    return res + "...";
}

/*Функция принимает строку и возвращает эту строку в
формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
*/

module.exports.wordCapitalLetter = function wordCapitalLetter(str) {
    str = str.split(" ");

    for(let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

/*Функция принимает два массива и целое число n. Функция
копирует каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и возвращает новый массив.*/

module.exports.connectingArrays = function connectingArrays(secondaryArr, mainArr, num) {
    let newArr = mainArr.slice();

    newArr.splice(num, 0, ...secondaryArr);

    return newArr;
}

/*Функция принимает массив и удаляет в нем все "ложные
значения".*/

module.exports.deletingFalseValues = function deletingFalseValues(arr) {

    for(let i = 0; i < arr.length; i++){

        if(arr[i] == false || arr[i] === undefined || arr[i]===null || Number.isNaN(arr[i])){
            delete arr[i];
        }
    }

    return arr;
}

/*Функцию принимает массив, состоящий из двух строк,
функция возвращает true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива.(регистр игнорируется)*/

module.exports.searchLettersString = function searchLettersString(arr) {

    for(let i=0; i<arr[1].length; i++){

        if(!arr[0].includes(arr[1][i])){

            return false;
        }
    }

    return true;
}

/*Функция принимает масссив и целое число, функция
разбивает массив на группы длиной size и
возвращает их в виде двумерного массива.*/

module.exports.splittingArray = function splittingArray(arr, num) {
    let newArr = [];

    while (arr.length > 0) { 
        newArr.push(arr.splice(0, num)); 
    }

    return newArr;
}

/*Функция использующая рекурсию, которая
принимает массив и целое число (n) и заполняет массив числами от n до 1.*/

module.exports.countingWithRecursion = function countingWithRecursion(arr, num) {

    if(num !== 0){
        arr.push(num);
        countingWithRecursion(arr, --num);
    }
    else{

        return arr;
    }

}


//                                                                                 ДЗ               //

/*Функция принимает n-ое количество аргументов и складывает их, пример вызова 
sum(5)(2)(3).*/

module.exports.sumNumber = function  sumNumber(argFrist) {
    let sum = argFrist;

    function  suma(argSecond) {

        return sumNumber(argFrist + argSecond);
    };
    suma.toString = suma.valueOf = function (){

        return sum;
    };

    return suma;
}


//                                                                                Задачи №2          //

/*Функция аналог map*/

module.exports.myMap = function myMap(func, arr) {
    let res = [];

    for(let i = 0; i < arr.length; i++){
        res.push(func.call(this, arr[i]));
    }

   return res;
};

/*Функция аналог filter.*/

module.exports.myFilter = function myFilter(func, arr) {
    let res = [];

    for(let i = 0; i < arr.length; i++){

        if(func.call(this, arr[i])){
            res.push(arr[i])
        }
    }

    return res;
}

/*Функция аналог find.*/

module.exports.myFind = function myFind(func, arr){

    for(let i = 0; i < arr.length; i++){

        if(func.call(this, arr[i])){
            return arr[i];
        }
    }

    return undefined;
}

/*Функция аналог some.*/

module.exports.mySome = function mySome(func, arr){

    for(let i = 0; i < arr.length; i++){

        if(func.call(this, arr[i])){

            return true;
        }
    }

    return false;
}

/*Функция аналог every.*/

module.exports.myEvery = function myEvery(func, arr){

    for(let i = 0; i < arr.length; i++){

        if(!func.call(this, arr[i])){

            return false;
        }
    }

    return true;
}


//                                                                                Задачи №3          //

/*Функция принимает на вход массив из двух чисел и возвращает
сумму этих двух чисел плюс сумму всех чисел между ними.*/

module.exports.sumAll = function sumAll(arr) {
    let max, min, sum=0;

    if(arr[0] > arr[1]){
        max = arr[0];
        min = arr[1];
    }
    else{
        max = arr[1];
        min = arr[0];
    };

    for(min; min <= max; min++){
        sum += min;
    };

    return sum;
}

/*Функция принимает два массива и возвращает новый
массив с элементами найденными только в одном массиве, но не в обоих.*/

module.exports.specialArray = function specialArray(firstArray, secondArray) {
    let newArray = firstArray.filter((a) => !secondArray.includes(a));
    let tempArray = secondArray.filter((a) => !firstArray.includes(a));

    return newArray.concat(tempArray);
}

/*Функция принимает массив и еще один или несколько
аргументов (точное количество не известно). Удалить из массива все элементы,
которые имеют то же значение, что и эти аргументы.*/

module.exports.deletingFromArray = function deletingFromArray(arr, ...arg) {

    for(let i = 0; i < arg.length; i++){

        for(let j = 0; j < arr.length; j++){

            if(arg[i] === arr[j]){
                delete arr[j];
            }
        }
    }

    return arr;
}

/*Функция просматривает массив объектов (первый аргумент) и
возвращает массив всех объектов, имеющих совпадающие пары имя и значение
(второй аргумент).*/
 
module.exports.searchObjects = function searchObjects(arr, obj) {
    let newArr = arr.slice();

    for(let i = 0; i < newArr.length; i++){

        for(let key in obj){

            if (typeof newArr[i][key] == "undefined") {
                newArr.splice(i, 1);
                break;
            }
        }
    }

    return newArr;
}

/*Функция конвертирует строку в spinal-case регистр.*/

module.exports.spinalCase = function spinalCase(str) {
    let newStr = str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();

    return newStr;
}

/*Функция осуществляет поиск и замену в предложении. Первый
аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
При замене сохраняйется регистр первого символа в исходном слове.*/

module.exports.replacementOfWord = function replacementOfWord(str, secondaryWord, mainWord) {
    let newStr = str.split(" ");

    for(let i = 0; i < newStr.length; i++){

        if(newStr[i].toLowerCase() == secondaryWord.toLowerCase()){

            if(newStr[i][0].toUpperCase() == newStr[i][0]){
                mainWord = mainWord[0].toUpperCase() + mainWord.substr(1);
                newStr[i] = mainWord;
            }
            else{
                newStr[i] = mainWord;
            }
        }
    }

    return newStr.join(" ");
}

/*Функцию принимает последовательность букв и ищет
пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
undefined.*/

module.exports.searchForLetters = function searchForLetters(str) {
    let lettersArr = str.split("").sort();
    let newArr = [];
    const numberUnicode = 36;

    for(let i = 0; i < lettersArr.length; i++){
        lettersArr[i] = lettersArr[i].charCodeAt() - numberUnicode;
    }
    let end = lettersArr[lettersArr.length - 1];

    for(let i = 0; i < end; i++){

        if(lettersArr[i] === end){
            break;
        }
        else{

            if(lettersArr[i] !== lettersArr[i + 1] - 1){
                let index = lettersArr.indexOf(lettersArr[i]);
                let arg = lettersArr[i] + 1;

                lettersArr.splice(index + 1, 0, arg);
                newArr.push(arg);
            }
        }
    }

    return !!newArr.length ? newArr : undefined;
}

/*Функция принимает два или более массивов и возвращает новый
массив уникальных значений.*/

module.exports.uniqueArray = function uniqueArray(...arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){

            if(!newArr.includes(arr[i][j])){
                newArr.push(arr[i][j])
            }
        }
    }

    return newArr;
}

/*Функция заменяет символы &, <, >, "(двойные кавычки),
и ‘(апостроф) в строке их соответствующим HTML - кодом.*/

module.exports.replacementSpecialCharacters = function replacementSpecialCharacters(str) {
    let newStr = str.split("");

    for(let i = 0; i < newStr.length; i++){

        if(newStr[i] === "&"){
            newStr[i] = "&amp";
        }

        else if(newStr[i] === "<"){
            newStr[i] = "&lt";
        }

        else if(newStr[i] === ">"){
            newStr[i] = "&gt";
        }

        else if(newStr[i] === '"'){
            newStr[i] = "&quot";
        }

        else if(newStr[i] === "'"){
            newStr[i] = "&apos";
        }
    }

    return newStr.join("");
}

/*Функцию суммирует все простые числа до n (аргумент функции).*/

module.exports.summationOfPrimes = function summationOfPrimes(num) {
    let arrNum = [];

    nextPrime:

    for (let i = 2; i <= num; i++) {

        for (let j = 2; j < i; j++) { 

          if (i % j === 0) continue nextPrime; 
        }
        arrNum.push(i);
    }

    return arrNum.map(i => x += i, x=0).reverse()[0]
}

/*Функция принимает массив и функцию и удаляет каждый элемент
массива начиная с первого, пока функция не вернет true, а затем возвращает
оставшуюся часть массива.*/

module.exports.deleteArr = function deleteArr(arr, fun) {

    for(let i = 0; i < arr.length; i++){

        if(!fun(arr[i])){
            delete arr[i];
        }
        else {
            break;
        }
    }

    return arr;
}

/*Функция принимает массив различной вложенности и возвращает
одномерный массив.*/

module.exports.removingNesting = function removingNesting(arr, newArr = []) {

    for (let elem of arr) {

		if (typeof elem === 'object') {
			removingNesting(elem, newArr);
		} 
        else {
            newArr.push(elem);
		}
	}

    return newArr;
}

/*Функция суммирует два аргумента вместе. Если указан только один
аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает
сумму.*/

module.exports.sumArg = function sumArg(numA, numB) {

    if(numB === undefined){

        return function (numB) {

            return numA + numB;
        }
    }
    else{

        return numB + numA;
    }
}