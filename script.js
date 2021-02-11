//                                                                             Задачи №1          //
module.exports.factorial =  function factorial(num) {
    return num ? num * factorial(num-1):1;
}


module.exports.longestWord = function longestWord(str) {
    str = str.split(" ")
    let word=0;
    for(let i=0;i<str.length;i++){
        if(str[i].length>word){
            word=str[i].length;
        }
    }
    return word;
}


module.exports.longestArray = function longestArray(arr) {
    let arrMaxNumber=0;
    let temporaryNumber=0;
    let arrIndex="";

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            temporaryNumber+=arr[i][j];
            if(temporaryNumber>arrMaxNumber){
                arrMaxNumber=temporaryNumber;
                arrIndex=i;
            }
        }
        temporaryNumber=0;
    }
    return arr[arrIndex];
}


module.exports.stringReduction = function stringReduction(str, num) {
    let res="";
    if(str.length>num){
        for(let i=0;i<num;i++){
            res+=str[i];
        }
    }
    else{
        res=str;
    }
    return res+"...";
}


module.exports.wordCapitalLetter = function wordCapitalLetter(str) {
    str=str.split(" ");
    for(let i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].substr(1);
    }
    return str.join(" ");
}


module.exports.connectingArrays = function connectingArrays(secondaryArr, mainArr, num) {
    let newArr=mainArr.slice();
    newArr.splice(num,0,...secondaryArr);
    return newArr;
}


module.exports.deletingFalseValues = function deletingFalseValues(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]==false||arr[i]===undefined||arr[i]===null||Number.isNaN(arr[i])){
            delete arr[i];
        }
    }
    return arr;
}


module.exports.searchLettersString = function searchLettersString(arr) {
    for(let i=0;i<arr[1].length;i++){
        if(!arr[0].includes(arr[1][i])){
            return false;
        }
    }
    return true;
}


module.exports.splittingArray = function splittingArray(arr, num) {
    let newArr=[];
    while (arr.length > 0) { 
        newArr.push(arr.splice(0, num)); 
    }
    return newArr;
}


module.exports.countingWithRecursion = function countingWithRecursion(arr, num) {
    if(num!==0){
        arr.push(num);
        countingWithRecursion(arr,--num);
    }
    else{
        return arr;
    }

}


//                                                                                 ДЗ               //


module.exports.sumNumber = function  sumNumber(argFrist) {
    let sum=argFrist;
    function  suma(argSecond) {
        return sumNumber(argFrist+argSecond);
    };
    suma.toString=suma.valueOf=function (){
        return sum;
    };
    return sum;
}


//                                                                                Задачи №2          //
    

module.exports.myMap = function myMap(func, arr) {
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(func.call(this,arr[i]));
    }
   return res;
};


module.exports.myFilter = function myFilter(func, arr) {
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(func.call(this,arr[i])){
            res.push(arr[i])
        }
    }
    return res;
}


module.exports.myFind = function myFind(func, arr){
    for(let i=0;i<arr.length;i++){
        if(func.call(this,arr[i])){
            return arr[i];
        }
    }
    return undefined;
}


module.exports.mySome = function mySome(func, arr){
    for(let i=0;i<arr.length;i++){
        if(func.call(this,arr[i])){
            return true;
        }
    }
    return false;
}


module.exports.myEvery = function myEvery(func, arr){
    for(let i=0;i<arr.length;i++){
        if(!func.call(this,arr[i])){
            return false;
        }
    }
    return true;
}


//                                                                                Задачи №3          //


module.exports.sumAll = function sumAll(arr) {
    let max,min,sum=0;
    if(arr[0]>arr[1]){
        max=arr[0];
        min=arr[1];
    }
    else{
        max=arr[1];
        min=arr[0];
    };
    for(min;min<=max;min++){
        sum+=min;
    };
    return sum;
}


module.exports.specialArray = function specialArray(firstArray, secondArray) {
    let newArray=firstArray.filter((a)=>!secondArray.includes(a));
    let tempArray=secondArray.filter((a)=>!firstArray.includes(a));
    return newArray.concat(tempArray);
}


module.exports.deletingFromArray = function deletingFromArray(arr, ...arg) {
    for(let i=0;i<arg.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arg[i]===arr[j]){
                delete arr[j]
            }
        }
    }
    return arr
}

 
function searchObjects(arr, obj) {
    let newArr=[];
       
    return newArr;
}


module.exports.spinalCase = function spinalCase(str) {
    let newStr = str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
    return newStr;
  }