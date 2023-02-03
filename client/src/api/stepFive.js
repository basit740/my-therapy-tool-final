// Actions

// Actions

export const createActions = async (versionId, actions) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepFiveActions/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(actions),
		}
	);

	return await response.json();
};

export const getActions = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepFiveActions/' + versionId,
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
