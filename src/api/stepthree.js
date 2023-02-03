// feelings & reflections

// feelings

export const createFeelings = async (versionId, feelings) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepThreeFeelings/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(feelings),
		}
	);

	return await response.json();
};

export const getFeelings = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepThreeFeelings/' + versionId,
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
