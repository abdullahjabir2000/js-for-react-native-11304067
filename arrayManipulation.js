function processArray(numbers) {
    return numbers.map(number => {
      if (number % 2 === 0) {
        return number ** 2;
      } else {
        return number + number + number;
      }
    });
  }
  


  function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
      const num = numbers[index];
      if (num % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  
  const inputStrings = ["University", "Legon", "Jabril", "Senegal", "Abdullah"];
  const inputNumbers = [5,8,4,3,10,3,7,9];
  const processedNumbers = processArray(inputNumbers);
  const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
  
  console.log(formattedStrings);
  