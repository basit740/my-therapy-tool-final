import { Skeleton } from '@mui/material';
import React from 'react';

const SlidersLoading = () => {
	const sliders = [1, 2, 3, 4, 5];
	return (
		<>
			{sliders.map((s) => {
				return (
					<>
						<Skeleton
							animation='wave'
							style={{
								marginBottom: '20px',
								paddingBottom: '20px',
								width: '65px',
								height: '15px',
								borderRadius: '5px',
							}}
						></Skeleton>
						<Skeleton
							style={{
								marginBottom: '60px',
								width: '100%',
								height: '7px',
							}}
						></Skeleton>
					</>
				);
			})}
		</>
	);
};

export default SlidersLoading;
