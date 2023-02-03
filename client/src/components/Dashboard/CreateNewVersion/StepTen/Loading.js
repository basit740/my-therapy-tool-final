import React from 'react';
import { Skeleton } from '@mui/material';

const skeletons = [];
for (let i = 1; i <= 5; i++) {
	skeletons.push(i);
}

function Loading() {
	return (
		<>
			{skeletons.map((s) => {
				return (
					<Skeleton
						animation='wave'
						variant='rectangular'
						height={40}
						width={150}
						style={{
							marginBottom: '5px',
							borderRadius: '20px',
							display: 'inline-block',
							marginRight: '5px',
						}}
					/>
				);
			})}
		</>
	);
}

export default Loading;
