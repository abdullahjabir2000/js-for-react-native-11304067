
const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(originalNames, modifiedNames) {
  return originalNames.map((name, index) => {
    return {
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index]
    };
  });
}

const originalNames = ["University", "Legon", "Jabril", "Senegal", "Abdullah"];
const inputNumbers = [5, 8, 4, 3, 10, 3, 7, 9];

const processedNumbers = processArray(inputNumbers);
const modifiedNames = formatArrayStrings(originalNames, processedNumbers);
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);