// Tags

// Tags

export const createStep8Tags = async (versionId, tags) => {
	console.log('tags in api', tags);
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepEightTags/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(tags),
		}
	);

	return await response.json();
};

export const get8Tags = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepEightTags/' + versionId,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		}
	);

	return await response.json();
};
