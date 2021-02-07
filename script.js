//                                                                             Задачи №1          //
function Factorial(num) {
    return num ? num * Factorial(num-1):1;
}


function LongestWord(str) {
    str = str.split(" ")
    let word=""
    for(let i=0;i<str.length;i++){
        if(str[i].length>word.length){
            word=str[i]
        }
    }
    return word;
}


function LongestArray(arr) {
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


function StringReduction(str, num) {
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


function WordCapitalLetter(str) {
    str=str.split(" ");
    for(let i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].substr(1);
    }
    return str.join(" ");
}


function ConnectingArrays(secondaryArr,mainArr,num) {
    let newArr=mainArr.slice();
    newArr.splice(num,0,...secondaryArr);
    return newArr;
}


function DeletingFalseValues(arr) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]==false||arr[i]===undefined||arr[i]===null||Number.isNaN(arr[i])){
            delete arr[i];
        }
    }
    return arr;
}


function SearchLettersString(arr) {
    for(let i=0;i<arr[1].length;i++){
        if(!arr[0].includes(arr[1][i])){
            return false;
        }
    }
    return true;
}


function SplittingArray(arr,num) {
    let newArr=[];
    while (arr.length > 0) { 
        newArr.push(arr.splice(0, num)); 
    }
    return newArr;
}


function CountingWithRecursion(arr,num) {
    
}