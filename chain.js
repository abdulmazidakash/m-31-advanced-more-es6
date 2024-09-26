//data access

const data = [{
	id: 1,
	name: 'abul',
	address: 'kochu khet',
}];

// console.log(data[0].address);

const products = {
	count: 5000,
	data: [
		{id: 1, name: 'lenovo laptop', price: 65000},
		{id: 2, name: 'macbook', price: 165000},
	]
};


//second product price access
// console.log(products.data[1].price);

const user = {
	id: 5001,
	name: 'shakib',
	address: {
		street: {
			first: '54/1 uttar side',
			second: 'pori bag er goli',
			third: 'no dhorai'
		},
		city: 'dhaka'
	}
};

// console.log(user.address.street.second);

const user2 = {
	id: 5002,
	name: 'pori bobir majar',
	address: {
		city: 'chittagong',
		country: 'bangladesh'
	}
};

console.log(user.address.street?.second);
console.log(user2.address.street?.second);