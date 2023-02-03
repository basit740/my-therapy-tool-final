import React, { useContext, useEffect } from 'react';
import NewVersionContext from '../../../../store/new-version-context';
//import AuthContext from '../../../../store/auth-context';

import { useNavigate } from 'react-router-dom';
import classes from './Introduction.module.css';
import IntroductionStatic from './IntroductionStatic';

const Introduction = () => {
	const navigate = useNavigate();
	const newVerCtx = useContext(NewVersionContext);

	useEffect(() => {
		if (newVerCtx.versionId === '') {
			navigate('/dashboard', { replace: true });
		}
	}, [newVerCtx.versionId, navigate]);
	return (
		<div className={classes['Introduction']}>
			<IntroductionStatic />
		</div>
	);
};

export default Introduction;
