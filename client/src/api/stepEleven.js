// Benefits

export const createBenefits = async (versionId, benefits) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepElevenBenefits/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(benefits),
		}
	);

	return await response.json();
};

export const getBenefits = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepElevenBenefits/' + versionId,
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
