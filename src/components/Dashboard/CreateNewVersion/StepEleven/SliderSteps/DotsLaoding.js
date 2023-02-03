import { Skeleton } from '@mui/material';
import React from 'react';

const DotsLaoding = () => {
	return (
		<>
			<Skeleton
				animation='wave'
				style={{
					width: '200px',
					height: '40px',
				}}
			/>
		</>
	);
};

export default DotsLaoding;
