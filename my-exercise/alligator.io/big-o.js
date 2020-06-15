

const smArr = [5, 3, 2, 35, 2];

const bigArr = [5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 
				35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2];

/*
O(1)

This is the ideal, no matter how many items there are, whether one or one million, 
the amount of time to complete will remain the same. Most operations that perform a 
single operation are O(1). Pushing to an array, getting an item at a particular index, 
adding a child element, etc,
*/

const a1 = performance.now();
smArr.push(27);
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // Less than 1 Millisecond


const b1 = performance.now();
bigArr.push(27);
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // Less than 1 Millisecond

//These two push functions take the same time no matter the length of the array


/*
O(n)

By default, all loops are an example of linear growth because there is a one-to-one relationship 
between the data size and time to completion. So an array with 1,000 times more items will take 
exactly 1,000 times longer.
*/

const a1 = performance.now();
smArr.forEach(item => console.log(item));
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // 3 Milliseconds

const b1 = performance.now();
bigArr.forEach(item => console.log(item));
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // 13 Milliseconds

/*
O(n^2)

Exponential growth is a trap we’ve all fall into at least once. Need to find a matching 
pair for each item in an array? Putting a loop inside a loop is great way of turning an 
array of 1,000 items into a million operation search that’ll freeze your browser. 
*/
