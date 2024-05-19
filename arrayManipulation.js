function processArray(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number ** 2;
      } else {
        return number + number + number;
      }
    });
  }
  
  const numArray = [4, 3, 6 ,7, 10, 46, 11];
  console.log(processArray(numArray)); 
