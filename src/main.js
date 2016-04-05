
// "AAABBBCCC", "ABC" -> "ABBBC"

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

function minimumWindowSubtring(a, b, minimumWindowSize = b.length) {
	for (let i = 0; i <= a.length - minimumWindowSize; i++) {
		const windowContents = a.substr(i, minimumWindowSize);

		if (containsEvery(b, windowContents)) {
			return windowContents;
		}
	}

	if (minimumWindowSize >= a.length) {
		return false;
	}

	return minimumWindowSubtring(a, b, ++minimumWindowSize);
}

module.exports = minimumWindowSubtring;
