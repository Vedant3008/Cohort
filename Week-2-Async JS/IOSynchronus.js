const fs = require('fs');

const data1 = fs.readFileSync('/Users/vedantshah/Desktop/Cohort/Week-2-Async JS/a.txt', 'utf-8');
console.log(data1);

const data2 = fs.readFileSync('/Users/vedantshah/Desktop/Cohort/Week-2-Async JS/b.txt','utf-8');
console.log(data2);

//
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
