// Lesson: Writing your first tests
export function max(a, b) {
//   if (a > b) return a;
//   else if (b > a) return b;
//   return a;

    return (a >= b) ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}


export function factorial(n) {
    if(n < 0) return undefined;
    let fact = 1;
    for(let i = 2; i <= n; i++) fact *= i;
    return fact;
}