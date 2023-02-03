import React from 'react';
import Skeleton from '@mui/material/Skeleton';
export default function Loading() {
	return (
		<>
			<Skeleton
				variant='rectangular'
				height={40}
				style={{ marginBottom: '5px', borderRadius: '5px' }}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				className='feeling'
				style={{ marginBottom: '5px', borderRadius: '5px' }}
			/>
		</>
	);
}
