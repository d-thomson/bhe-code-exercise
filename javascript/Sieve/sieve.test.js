const Sieve = require("./sieve");

describe("Sieve", () => {
  test("valid results", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3581);
    expect(sieve.NthPrime(986)).toBe(7793);
    expect(sieve.NthPrime(2000)).toBe(17393);
    expect(sieve.NthPrime(1000000)).toBe(15485867);
    expect(sieve.NthPrime(10000000)).toBe(179424691);
    //expect(sieve.NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
  });

  let testCases = [
    [0,2],
    [19, 71],
    [99, 541],
    [500, 3581],
    [986, 7793],
    [2000, 17393],
    [1000000, 15485867],
    [10000000, 179424691],
    // [100000000, 2038074751] not required
  ]
  xtest.each(testCases)("Check NthPrime(%i) = %i", (a, b) => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(a)).toBe(b);
  });
});