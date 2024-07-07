//generate random array of numbers then sort them. this is test stuff here

const getRandomNumber = (max, min) => {
  try {
    if (min > max) {
      throw new Error("min value must not be bigger than max value");
    } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  } catch (error) {
    console.error("error in function", error.message);
    return null;
  }
};

//random array function
const getRandomArray = (max, min, arrayLength) => {
  let array = [];
  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = getRandomNumber(max, min);
    array.push(randomNumber);
  }

  return array;
};

//sort the array
const selectionSort = (array) => {
  let n = array.length;

  for (let i = 0; i < n-1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    //use array destructing better way than temp varaibles
  [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  

  return array;
};

const max = 109;
const min = 0;
const arrayLength = 6;
const randomArray = getRandomArray(max, min, arrayLength);
const sortedArray=selectionSort(randomArray);

console.log("random array:", randomArray);
console.log('sorted array:',sortedArray);
