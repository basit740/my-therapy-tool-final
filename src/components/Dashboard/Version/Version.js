import React from 'react';
import NewVersion from '../NewVersion';

import MyVersions from '../MyVersions/MyVersions';
import MyVersionsLeft from '../MyVersions/MyVersionsLeft';
//import MyVersionsRight from '../MyVersions/MyVersionsRight';

const Version = () => {
	return (
		<>
			{' '}
			<NewVersion />
			<MyVersions>
				<MyVersionsLeft />
				{/* <MyVersionsRight /> */}
			</MyVersions>
		</>
	);
};

export default Version;
