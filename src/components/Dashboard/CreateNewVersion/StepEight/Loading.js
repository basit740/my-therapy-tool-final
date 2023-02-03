import React from 'react';
import { Skeleton } from '@mui/material';

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Loading() {
	return (
		<>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
			<Skeleton
				variant='rectangular'
				height={40}
				width={getRandomNum(100, 200)}
				style={{
					marginBottom: '5px',
					borderRadius: '20px',
					display: 'inline-block',
					marginRight: '5px',
				}}
			/>
		</>
	);
}

export default Loading;
