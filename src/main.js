
// "AAAAABBBC", "BAB" === "ABB"

function containsEvery(str, from) {
	const fromArr = from.split('');

	return str.split('').every(char => {
		const index = fromArr.indexOf(char);
		if (index > -1) {
			fromArr.splice(index, 1);
		}

		return index > -1;
	});
}

function minimumWindowSubtring(a, b) {
	const minimumWindowSize = b.length;
	for (let i = 0; i < 7; i++) {
		const windowContents = a.substr(i, minimumWindowSize);
		console.log('\n:', windowContents, containsEvery(b, windowContents), '\n');

		if (containsEvery(b, windowContents)) {
			return windowContents;
		}
	}
}

module.exports = minimumWindowSubtring;
