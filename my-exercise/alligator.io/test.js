
const smArr = [5, 3, 2, 35, 2];

const bigArr = [5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 
				35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2];

test('Big O notation for O(1)', () => {
  	const a1 = performance.now();
	smArr.push(27);
	const a2 = performance.now();
	console.log(`small array Time: ${a2 - a1}`); // Less than 1 Millisecond

	expect(a2 - a1).toBeGreaterThanOrEqual(0.01);

	const b1 = performance.now();
	bigArr.push(27);
	const b2 = performance.now();
	console.log(`big array Time: ${b2 - b1}`); // Less than 1 Millisecond

	expect(b2 - b1).toBeGreaterThanOrEqual(0.01);
});


test('Big O notation for O(n)', () => {

	const a1 = performance.now();
	smArr.forEach(item => {});
	const a2 = performance.now();

	var first_diff = a2 - a1;
	console.log(`Time: ${a2 - a1}`); // 3 Milliseconds

	const b1 = performance.now();
	bigArr.forEach(item => {});
	const b2 = performance.now();

	var second_diff = b2 - b1;
	console.log(`Time: ${second_diff}`); // 13 Milliseconds

	expect(second_diff).toBeGreaterThan(first_diff);

})
