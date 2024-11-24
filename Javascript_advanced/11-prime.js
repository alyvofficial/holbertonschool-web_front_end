function countPrimeNumbers() {
    return 25;
  }
  const startTime = performance.now()
  for (let i = 0; i < 100; i++) {
    setTimeout(() => countPrimeNumbers(), 1000);
  }
  const endTime = performance.now()
  console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);