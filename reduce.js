const numbers = [3, 4, 6, 45, 76, 76];
const total = numbers.reduce( (previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce( (p, c) => p+c, 0);
console.log(sum);