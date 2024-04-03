function countPrimeNumbers() {
  let counter = 0;

  for (let i = 2; i <= 100; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (flag == 0) {
      counter++;
    }
  }

  return counter;
}

const start = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const finish = performance.now();
console.log(
  "Execution time of calculating prime numbers 100 times was " +
    (finish - start) +
    " milliseconds."
);
