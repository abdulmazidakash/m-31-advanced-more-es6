//map => loop through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in array and finally returns you the array.


const numbers = [3,44,46, 646, 767, 765];

function doubleIt(num){
	console.log('num now', num);
	return num * 2;
}

// const result = numbers.map(doubleIt);
// console.log(result);

const double2 = n => n * 2;
const result = numbers.map(doubleIt);
// console.log(result);

const output = numbers.map(double2)
// console.log(double2);

const output2 = numbers.map(n => n * 2);

const doubled = [];
for (const num of numbers){
	const double = num * 2;
	doubled.push(double);
}
console.log(doubled);
