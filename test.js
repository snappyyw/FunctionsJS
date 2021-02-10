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


it("Тестирование longestArray", function () {
  let expectedResult = [3,5]
  let result = operations.longestArray([[1,2,3],[3,5],[5]]);
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
  let expectedResult = 5;
  let result = operations.sumNumber(5);
  if (expectedResult !== result) {
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
