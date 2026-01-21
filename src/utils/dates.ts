export function formatDate(date: Date) {
	const formattedDate = date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return formattedDate;
}

// 31557600000 ms = 365.25 days * 24 hours * 60 minutes * 60 seconds * 1000 ms
const MILLIS_IN_A_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export function calculateYearDifference(date: Date) {
	const birthDate = date.getTime();
	const now = new Date().getTime();
	const diff = now - birthDate;

	return Math.floor(diff / MILLIS_IN_A_YEAR);
}
