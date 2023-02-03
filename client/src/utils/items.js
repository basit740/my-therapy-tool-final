export const ItemTypes = {
	FEELING: 'Feeling',
};

export const dateFormatter = (dateString) => {
	const formatedDate = new Date(dateString);

	var month = formatedDate.getUTCMonth() + 1; //months from 1-12
	var day = formatedDate.getUTCDate();
	var year = formatedDate.getUTCFullYear();

	if (day.toString().length === 1) {
		day = '0' + day;
	}

	if (month.toString().length === 1) {
		month = '0' + month;
	}
	const properDate = day + '/' + month + '/' + year;

	return properDate;
};
