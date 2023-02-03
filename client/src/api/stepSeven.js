// Thoughts

// Thoughts

export const createThoughts = async (versionId, thoughts) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepSevenThoughts/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(thoughts),
		}
	);

	return await response.json();
};

export const getThoughts = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepSevenThoughts/' + versionId,
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
