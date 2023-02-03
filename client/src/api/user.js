export const getMe = async () => {
	const response = await fetch(process.env.REACT_APP_API_URL + '/auth/me', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
	});

	return await response.json();
};

export const sendResetCode = async (email) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/auth/sendcode/' + email,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return await response.json();
};

export const verifyCode = async (email, code) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/auth/verifycode/' + email + '/' + code,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return await response.json();
};

export const resetPassword = async (email, password) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL +
			'/auth/resetpassword/' +
			email +
			'/' +
			password,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		}
	);

	return await response.json();
};
