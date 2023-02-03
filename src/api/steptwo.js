// feelings

export const createIssues = async (versionId, issues) => {
	console.log(versionId, issues);
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepTwoIssues/' + versionId,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(issues),
		}
	);

	return await response.json();
};

export const getIssues = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepTwoIssues/' + versionId,
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
