var operations = require('./script')

//                                                                Тестирование задач №1//
it("Тестирование factorial", function () {
  let expectedResult = 24
  let result = operations.factorial(4)

  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = 1
  result = operations.factorial(1)
  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = 1
  result = operations.factorial(0)
  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование longestWord", function () {
  let expectedResult = 5
  let result = operations.longestWord("1 4444  222 ewq   55555 eq")

  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = 0
  result = operations.longestWord("")
  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = 15
  result = operations.longestWord("eqwe eqwe qwewqewqewqewqe")
  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование greatestNumberArray", function () {
  let expectedResult = [3,5,5]
  let result = operations.greatestNumberArray([[1,2,3],[3,5],[5]]);

  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = [5,21,132]
  result = operations.greatestNumberArray([[1,2,3,3,5,1,3,2],[3,4,3,21,4,6,9,5],[5,3,2,132,1,2,]]);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование stringReduction", function () {
  let expectedResult = "..."
  let result = operations.stringReduction("",5);

  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = "qwe..."
  result = operations.stringReduction("qwerrrrfasda",3);
  if (result !== expectedResult) {
      throw new Error(
        `Ожидалось ${expectedResult}, получилось ${result}`
      )
    }
})


it("Тестирование wordCapitalLetter", function () {
  let expectedResult = "A Deqw F Sada"
  let result = operations.wordCapitalLetter("a Deqw f sada");

  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = "Qwerrrrfasda"
  result = operations.wordCapitalLetter("qwerrrrfasda");
  if (result !== expectedResult) {
      throw new Error(
        `Ожидалось ${expectedResult}, получилось ${result}`
      )
    }
})


it("Тестирование connectingArrays", function () {
  let expectedResult = [1,3,4,2]
  let result = operations.connectingArrays([3,4],[1,2],1);

  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = [1,2,3,6,5,4,7]
  result = operations.connectingArrays([6,5,4],[1,2,3,7],3);
  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
      throw new Error(
        `Ожидалось ${expectedResult}, получилось ${result}`
      )
    }
})


it("Тестирование deletingFalseValues", function () {
  let expectedResult = "qeqw,5,ewqeqe,,eqweqw,,123,,1,,4,,"
  let result = operations.deletingFalseValues(["qeqw",5,"ewqeqe",NaN,"eqweqw","",123,false,1,undefined,4,0,0n]);

  if (result != expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование searchLettersString", function () {
  let expectedResult = false
  let result = operations.searchLettersString(["привет","ы"]);

  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = true
  result = operations.searchLettersString(["привет","и"]);
  if (result !== expectedResult) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование splittingArray", function () {
  let expectedResult=[[1,2],[3,4],[5,6],[7,8]];
  let result= operations.splittingArray([1,2,3,4,5,6,7,8],2);

  if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование countingWithRecursion", function () {
  let expectedResult = [5,4,3,2,1]
  let result=[];

  operations.countingWithRecursion(result,5);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})

  
//                                                                Тестирование ДЗ //


it("Тестирование sumNumber", function () {
  let expectedResult = 13;
  let result = operations.sumNumber(5)(5)(3);

  if (expectedResult !== +result) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


//                                                                Тестирование задач №2 //


it("Тестирование myMap", function () {
  let expectedResult = [2,3,4,5];
  let result = operations.myMap((a)=>a+1,[1,2,3,4]);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = ["ASD","QEWWQ","ASD","ZXC"];
  result = operations.myMap((a)=>a.toUpperCase(),["asd","qewwq","asd","zxc"]);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование myFilter", function () {
  let expectedResult = [4,5];
  let result = operations.myFilter((a)=>a>3,[1,2,3,4,5]);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = ["qeqw",5,"ewqeqe","eqweqw",123,1,4];
  result = operations.myFilter(Boolean,["qeqw",5,"ewqeqe",NaN,"eqweqw","",123,false,1,undefined,4,0,0n]);
  if (JSON.stringify(expectedResult) != JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование myFind", function () {
  let expectedResult = 41;
  let result = operations.myFind((a)=>a>3,[2,2,2,41,5]);

  if (expectedResult !== result) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = undefined;
  result = operations.myFind((a)=>a>10,["qeqw",5,3,2,"eqwewq"]);
  if (JSON.stringify(expectedResult) != JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование mySome", function () {
  let expectedResult = true;
  let result = operations.mySome((a)=>a>3,["qew","qweqwe",5]);

  if (expectedResult !== result) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = false;
  result = operations.mySome((a)=>a>10,["qeqw",5,3,2,"eqwewq"]);
  if (JSON.stringify(expectedResult) != JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование myEvery", function () {
  let expectedResult = true;
  let result = operations.myEvery((a)=>a>=3,[50,500,10]);

  if (expectedResult !== result) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = false;
  result = operations.myEvery((a)=>a>10,["qeqw",500,3,2,"eqwewq"]);
  if (JSON.stringify(expectedResult) != JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


//                                                                Тестирование задач №2 //



it("Тестирование sumAll", function () {
  let expectedResult = 10;
  let result = operations.sumAll([4,1]);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = 0;
  result = operations.sumAll([]);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование specialArray", function () {
  let expectedResult = [6,8];
  let result = operations.specialArray([1,2,3,4,5,6],[1,3,4,5,2,8]);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = [];
  result = operations.specialArray([1,2,3],[1,2,3]);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование deletingFromArray", function () {
  let expectedResult = [1,,,4,5,6];
  let result = operations.deletingFromArray([1,2,3,4,5,6],2,3);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = [1,,,,];
  result = operations.deletingFromArray([1,2,3,"qwe"],2,"qwe",3);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование searchObjects", function () {
  let expectedResult = [{"apple":1,"bat":2},{"apple":1,"bat":2,"cookie":2}];
  let result = operations.searchObjects([{ "apple": 1, "bat": 2 }, { "apple": 1 },{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${JSON.stringify(expectedResult)}, получилось ${JSON.stringify(result)}`
    )
  }
})


it("Тестирование spinalCase", function () {
  let expectedResult = "q-e-w-q-e-q-e-dsasd-fs-df-fasf-s";
  let result = operations.spinalCase("QEWQEQE dsasd fs df-fasf s");

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = "dadsa-wqe-eqwe-afa";
  result = operations.spinalCase("dadsaWqe Eqwe afa");
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование replacementOfWord", function () {
  let expectedResult = "QEWQEQE 123";
  let result = operations.replacementOfWord("QEWQEQE dsasd","dsasd","123");

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = "adasd Qwe";
  result = operations.replacementOfWord("adasd Abc","abc","qwe");
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование searchForLetters", function () {
  let expectedResult = [64,65];
  let result = operations.searchForLetters("abcf");

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = [62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85];
  result = operations.searchForLetters("az");
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование uniqueArray", function () {
  let expectedResult = ['qweqwe','wewqeq',3,1,34];
  let result = operations.uniqueArray(['qweqwe'],['wewqeq',3,1],[34],[34]);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = [31,30,5,1];
  result = operations.uniqueArray([31],[30,5],[30],[5],[1]);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование replacementSpecialCharacters", function () {
  let expectedResult = "qweqwew eqe &ampqe &lt&gt &apos";
  let result = operations.replacementSpecialCharacters("qweqwew eqe &qe <> '");

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = "adasd Abc";
  result = operations.replacementSpecialCharacters("adasd Abc");
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование summationOfPrimes", function () {
  let expectedResult = 17;
  let result = operations.summationOfPrimes(10);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
  expectedResult = 10;
  result = operations.summationOfPrimes(5);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование deleteArr", function () {
  let expectedResult = [,,3,4];
  let result = operations.deleteArr([1, 2, 3, 4], function(n) {return n >= 3;});
  
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${JSON.stringify(expectedResult)}, получилось ${JSON.stringify(result)}`
    )
  }
  expectedResult = 5;
  result = operations.deleteArr(5);
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})


it("Тестирование removingNesting", function () {
  let expectedResult = [1,2,3,4];
  let result = operations.removingNesting([1, [2], [3, [[4]]]]);

  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${JSON.stringify(expectedResult)}, получилось ${JSON.stringify(result)}`
    )
  }
})


it("Тестирование sumArg", function () {
  let expectedResult = 11;
  let result = operations.sumArg(5,6);
  
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${JSON.stringify(expectedResult)}, получилось ${JSON.stringify(result)}`
    )
  }
  expectedResult = 6;
  result = operations.sumArg(5);
  result=result(1)
  if (JSON.stringify(expectedResult) !== JSON.stringify(result)) {
    throw new Error(
      `Ожидалось ${expectedResult}, получилось ${result}`
    )
  }
})