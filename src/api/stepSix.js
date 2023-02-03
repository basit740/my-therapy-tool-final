// Contacts

// Contacts

export const createContacts = async (versionId, contacts) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepSixContacts/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(contacts),
		}
	);

	return await response.json();
};

export const getContacts = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepSixContacts/' + versionId,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		}
	);

	console.log(response);

	return await response.json();
};
