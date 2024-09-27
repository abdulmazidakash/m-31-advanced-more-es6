//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [1, 5, 56, 76, 56];
const players = [45, 45, 65, 87, 87];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1);

console.log(selected);

const friends = ['tom', 'john', 'michael', 'oliver', 'tim', 'joshna'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);