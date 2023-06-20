function concatName(firstname, lastname) {
	if (typeof firstname !== "string" || typeof lastname !== "string")
		return undefined;
	return `${firstname} ${lastname}`;
}

module.exports = concatName;
