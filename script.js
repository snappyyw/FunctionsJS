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
    
}