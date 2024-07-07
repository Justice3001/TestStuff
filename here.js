//bubble sort

const swap = (arry, a, b) => {
  let temp = arry[a];
  arry[a] = arry[b];
  arry[b] = temp;
};

let arry = [109, 54, 2, 34, 87, 23, 123, 431, 1, 7];

for (let i = 0; i < arry.length - 1; i++) {
  for (let j = 0; j < arry.length - 1 - i; j++) {
    if (arry[j] > arry[j + 1]) {
      swap(arry, j, j + 1);
    }
  }
}

//this is outputs it on the screen.
console.log(arry + " ");
