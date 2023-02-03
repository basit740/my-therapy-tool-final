import React, { useState } from 'react';

import { initialState } from '../components/Dashboard/CreateNewVersion/StepThree/reducer';

const NewVersionContext = React.createContext({
	versionId: '',
	versionIdHandler: (versionId) => {},
	currentStep: 1,
	currentStepHandler: (stepNumber) => {},

	stepOneState: null,
	onStepOneStateChange: () => {},
	stepOneFirstHandler: (val) => {},
	stepOneSecondHandler: (val) => {},
	stepOneThirdHandler: (val) => {},
	stepOneFourthHandler: (val) => {},
	stepOneValuesClearer: () => {},
	stepOneSaver: () => {},
	stepOneUnSaver: () => {},
	stepOneFirst: '',
	stepOneSecond: '',
	stepOneThird: '',
	stepOneFourth: '',
	stepOneSaved: false,

	stepTwoIssuesModifier: (issues) => {},
	stepTwoIssues: {},
	stepTwoClearer: () => {},

	stepThreeStateModifier: (state) => {},
});

export const NewVersionContextProvider = (props) => {
	const [versionId, setVersionId] = useState('');
	const [currentStep, setCurrentStep] = useState(1);

	// For StepOne Context
	const [stepOneState, setStepOneState] = useState(null);
	const [stepOneFirst, setStepOneFirst] = useState('');
	const [stepOneSecond, setStepOneSecond] = useState('');
	const [stepOneThird, setStepOneThird] = useState('');
	const [stepOneFourth, setStepOneFourth] = useState('');

	const [stepOneSaved, setStepOneSaved] = useState(false);

	// StepTwo
	const [stepTwoIssues, setStepTwoIssues] = useState({});

	// stepThree
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const [stepThreeState, setStepThreeState] = useState(initialState);
	// // just using it
	console.log(stepThreeState);

	const versionIdHandler = (versionId) => {
		setStepOneSaved(false);
		setVersionId(versionId);

		setStepOneFirst('');
		setStepOneSecond('');
		setStepOneThird('');
		setStepOneFourth('');

		setStepOneSaved(false);

		// StepTwo
		setStepTwoIssues({});

		// stepThree
		setStepThreeState({
			feelings: [
				{ id: 1, feelingContent: '', feelingReflection: '' },
				{ id: 2, feelingContent: '', feelingReflection: '' },
				{ id: 3, feelingContent: '', feelingReflection: '' },
			],
		});
	};

	const currentStepHandler = (currentStep) => {
		setCurrentStep(currentStep);
	};

	const stepOneStateChangeHandler = (state) => {
		setStepOneState(state);
	};
	const stepOneFirstHandler = (val) => {
		setStepOneSaved(false);
		setStepOneFirst(val);
	};

	const stepOneSecondHandler = (val) => {
		setStepOneSaved(false);
		setStepOneSecond(val);
	};
	const stepOneThirdHandler = (val) => {
		setStepOneThird(val);
	};

	const stepOneFourthHandler = (val) => {
		setStepOneFourth(val);
	};

	const stepOneValuesClearer = () => {
		setStepOneFirst('');
		setStepOneSecond('');
		setStepOneThird('');

		setStepOneSaved(false);
	};

	const stepOneSaver = () => {
		setStepOneSaved(true);
	};
	const stepOneUnSaver = () => {
		setStepOneSaved(false);
	};

	// stepTwo Issues

	const stepTwoIssuesModifier = (issues) => {
		setStepTwoIssues(issues);
		//console.log(stepTwoIssues);
	};

	const stepTwoClearer = () => {
		setStepTwoIssues({});
	};

	// stepThree Feelings

	// const stepThreeStateModifier = (state) => {
	// 	setStepThreeState((prev) => {
	// 		return { ...state };
	// 	});
	// };

	const contextValue = {
		versionIdHandler: versionIdHandler,
		versionId: versionId,
		currentStep: currentStep,
		currentStepHandler: currentStepHandler,

		onStepOneStateChange: stepOneStateChangeHandler,
		stepOneState,
		stepOneValuesClearer,
		stepOneFirstHandler,
		stepOneFirst,
		stepOneSecondHandler,
		stepOneSecond,
		stepOneThirdHandler,
		stepOneThird,
		stepOneFourthHandler,
		stepOneFourth,
		stepOneSaver,
		stepOneUnSaver,
		stepOneSaved,

		stepTwoIssues,
		stepTwoIssuesModifier,
		stepTwoClearer,
		// stepThreeStateModifier,
		// stepThreeState,
	};

	return (
		<NewVersionContext.Provider value={contextValue}>
			{props.children}
		</NewVersionContext.Provider>
	);
};

export default NewVersionContext;
