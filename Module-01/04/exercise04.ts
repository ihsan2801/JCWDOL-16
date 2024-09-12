////////////////////////
// SOAL 1 left triangle
///////////////////////
function leftTriangle(height: number) {
    let _star: string = ``;
    for (let i = 1; i < height; i++) {
      for (let j = 1; j <= i; j++) {
        _star += `0${j}`;
      }
      _star += `\n`;
    }
    return _star;
  }
  console.log(leftTriangle(4));
  
  ////////////////////
  // SOAL 2. FizzBuzz
  ///////////////////
  let totalLooping: number = 15;
  function fizzBuzz(n: number) {
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0) {
        if (i % 5 === 0) {
          console.log(`FizzBuzz`);
        }
        console.log(`Fizz`);
      } else if (i % 5 === 0) {
        console.log(`Buzz`);
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz(totalLooping);
  
  ////////////////////////////////////
  // SOAL 3. Body mass index function
  ///////////////////////////////////
  function bodyMassIndex(weight, height) {
    let bmi: number = weight / height ** 2;
    if (bmi < 18.5) {
      return `less weight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return `ideal`;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return `overweight`;
    } else if (bmi >= 30.0 && bmi <= 39.9) {
      return `very overweight`;
    } else {
      return `obesity`;
    }
  }
  
  ///////////////////////////////////////
  // SOAL 4. Remove odd numbers in array
  //////////////////////////////////////
  let listNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let listEven: number[] = [];
  function removeOddNumbers(listParameter: number[]) {
    for (let i of listParameter) {
      if (i % 2 === 0) {
        listEven.push(i);
      } else {
        continue;
      }
    }
    return listEven;
  }
  const evenNumbers = removeOddNumbers(listNumber);
  console.log(evenNumbers);
  
  ///////////////////////////////////////////////////////
  //  SOAL 5. Split string and convert to array of words
  //////////////////////////////////////////////////////
  let _string: string = `Hello World`;
  function stringToArray(_inputString: string) {
    return _inputString.split(` `);
  }
  const cekHasil = stringToArray(_string);
  console.log(cekHasil);