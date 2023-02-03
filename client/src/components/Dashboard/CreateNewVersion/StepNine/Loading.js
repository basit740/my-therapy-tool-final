import React from 'react';
import { Skeleton } from '@mui/material';

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const loadingSkeletons = [];

const rNum = getRandomNum(2, 4);
let i = 1;
while (i < rNum) {
	loadingSkeletons.push(i);
	i++;
}

function Loading() {
	return (
		<>
			{loadingSkeletons.map((l) => {
				return (
					<Skeleton
						animation='wave'
						duration={1}
						variant='rectangular'
						style={{
							border: '1px solid black',
							position: 'relative',
							marginBottom: '5px',
							borderRadius: '10px',
							padding: '5px',
							backgroundColor: '#dcdcdc',
							height: '35px',
							verticalAlign: 'top',
						}}
					/>
				);
			})}
		</>
	);
}

export default Loading;
