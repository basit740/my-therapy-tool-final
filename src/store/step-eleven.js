import React, { useState } from 'react';

const Step11Context = React.createContext({
	step1Sliders: null,
	step2Sliders: null,
	step3Sliders: null,
	step4Sliders: null,
	step5Sliders: null,
	onStateChange: (state) => {},
});

export const Step11ContextProvider = (props) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	// const [state, setState] = useState(null);

	const [step1Sliders, setStep1Sliders] = useState(null);
	const [step2Sliders, setStep2Sliders] = useState(null);
	const [step3Sliders, setStep3Sliders] = useState(null);
	const [step4Sliders, setStep4Sliders] = useState(null);
	const [step5Sliders, setStep5Sliders] = useState(null);

	const onStateChange = (sliders, stepID) => {
		switch (stepID) {
			case '1':
				setStep1Sliders((prev) => {
					return [...sliders];
				});
				break;
			case '2':
				setStep2Sliders((prev) => {
					return [...sliders];
				});
				break;
			case '3':
				setStep3Sliders((prev) => {
					return [...sliders];
				});
				break;
			case '4':
				setStep4Sliders((prev) => {
					return [...sliders];
				});
				break;
			case '5':
				setStep5Sliders((prev) => {
					return [...sliders];
				});
				break;
			default:
			// do nothing
		}
	};
	const contextValue = {
		step1Sliders,
		step2Sliders,
		step3Sliders,
		step4Sliders,
		step5Sliders,
		onStateChange,
	};

	return (
		<Step11Context.Provider value={contextValue}>
			{props.children}
		</Step11Context.Provider>
	);
};

export default Step11Context;
