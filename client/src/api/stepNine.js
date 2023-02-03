// Tags

// Tags

export const createGoals = async (versionId, goals) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepNineGoals/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(goals),
		}
	);

	return await response.json();
};

export const getGoals = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepNineGoals/' + versionId,
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
