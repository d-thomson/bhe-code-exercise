class Sieve {
  /*
  https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  ===================================================
  algorithm Sieve of Eratosthenes is
  input: an integer n > 1.
  output: all prime numbers from 2 through n.

  let A be an array of Boolean values, indexed by integers 2 to n,
  initially all set to true.
  
  for i = 2, 3, 4, ..., not exceeding √n do
      if A[i] is true
          for j = i^2, i^2+i, i^2+2i, i^2+3i, ..., not exceeding n do
              set A[j] := false

  return all i such that A[i] is true.
  =====================================================
  */
  NthPrime(n) {
    // An approximation for the length of array we need to find the nth prime is:
    //   Pn ≤ nlog(nlog(n)) for n ≥ 6.
    // 20 is a fallback limit for n < 6 that will cover the range 0..5, else use the estimate.
    let limit = n < 6 ? 20 : Math.floor(n*(Math.log(n*Math.log(n))))

    // Fill primes array as all `true` values. 0 and 1 indices will be false since we start at A[2].
    let A = [...Array(limit).keys()].map(i => true);
    A[0] = A[1] = false;

    // Rather than looping to √n, loop to our Pn limit estimation.
    for (let i = 2; i <= limit; i++) {
      if (A[i]) {
        for (let j = i*i; j<=limit; j+=i) {
          A[j] = false;
        }
      }
    }

    // All `true` indices are primes. Remove all false entries and return A[n].
    return A.reduce((acc, Ai, i) => {
      if(Ai) acc.push(i);
      return acc;
    }, [])[n];
  }
}

module.exports = Sieve;