
// "AAAAABBBC", "BAB" === "ABB"

function containsEvery(str, from) {
	let fromArr = from.split('');
	return str.split('').every(char => {
		fromArr.includes(char);
	});
}

function minimumWindowSubtring(a, b) {
	const minimumWindowSize = b.length;
	for (let i = 0; i < 7; i++) {
		const windowContents = a.substr(i, minimumWindowSize);
		console.log('\n:', windowContents, containsEvery(b, windowContents), '\n');
	}
}

module.exports = minimumWindowSubtring;
