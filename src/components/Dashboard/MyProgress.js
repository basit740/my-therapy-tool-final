import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// for API call
import { createIssues } from '../../api/steptwo.js';
import { createFeelings } from '../../api/stepthree';
import { createTags } from '../../api/stepfour.js';
import { createActions } from '../../api/stepFive.js';
import { createContacts } from '../../api/stepSix.js';
import { createThoughts } from '../../api/stepSeven.js';
import { createStep8Tags } from '../../api/stepEight.js';
import { createGoals } from '../../api/stepNine.js';
import { createStep10Tags } from '../../api/stepTen.js';
import { createBenefits } from '../../api/stepEleven.js';

//context
import NewVersionContext from '../../store/new-version-context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Introduction from './CreateNewVersion/Introduction/Introduction.js';
import StepOne from './CreateNewVersion/StepOne/StepOne.js';
import StepTwo from './CreateNewVersion/StepTwo/StepTwo';
import StepThree from './CreateNewVersion/StepThree/StepThree.js';
import StepFour from './CreateNewVersion/StepFour/StepFour.js';
import StepFive from './CreateNewVersion/StepFive/StepFive.js';
import StepSix from './CreateNewVersion/StepSix/StepSix.js';
import StepSeven from './CreateNewVersion/StepSeven/StepSeven.js';
import StepEight from './CreateNewVersion/StepEight/StepEight.js';
import StepNine from './CreateNewVersion/StepNine/StepNine.js';
import StepTen from './CreateNewVersion/StepTen/StepTen.js';
import StepEleven from './CreateNewVersion/StepEleven/StepEleven.js';
//import Results from './CreateNewVersion/Results/Results.js';

import classes from './MyProgress.module.css';

const MyProgress = () => {
	const navigate = useNavigate();
	const newVerCtx = useContext(NewVersionContext);
	//const previousButton = document.querySelector('buttonPrevious');
	//const saveButton = document.querySelector('buttonSave');
	//const tab = document.querySelector('tab');
	//const progressStep = document.querySelector('progressStep');
	//const progressStepActive = document.querySelector('progressStep-Active');
	//const progressStepDone = document.querySelector('progressStep-Done');

	//const [sendingRequest, setSendingRequest] = useState(false);
	const [saveButtonText, setSaveButtonText] = useState('Save & Continue');

	//const [checkClassName, setCheckClassName] = useState('');

	// States for All Step Components
	const [stepTwoState, setStepTwoState] = useState({});
	const [stepThreeState, setStepThreeState] = useState({});
	const [stepFourState, setStepFourState] = useState({});
	const [stepFiveState, setStepFiveState] = useState({});
	const [stepSixState, setStepSixState] = useState({});
	const [stepSevenState, setStepSevenState] = useState({});
	const [stepEightState, setStepEightState] = useState({});
	const [stepNineState, setStepNineState] = useState({});
	const [stepTenState, setStepTenState] = useState({});
	const [stepElevenState, setStepElevenState] = useState(null);

	let [formStep, setFormStep] = useState(1);

	// const [activeClassNames, setActiveClassNames] = useState({
	// 	intro: 'progressStep progressStep-Active',
	// 	first: 'progressStep',
	// 	second: 'progressStep',
	// 	third: 'progressStep',
	// 	fourth: 'progressStep',
	// 	fifth: 'progressStep',
	// 	sixth: 'progressStep',
	// 	seventh: 'progressStep',
	// 	eigth: 'progressStep',
	// 	nine: 'progressStep',
	// 	ten: 'progressStep',
	// 	eleven: 'progressStep',
	// });

	const prevHandler = () => {
		if (formStep === 12) {
			console.log(formStep);
			setSaveButtonText('See Results');
		} else {
			setSaveButtonText('Save & Continue');
		}
		setFormStep(parseInt(formStep) - 1);
	};

	const nextHandler = async () => {
		setSaveButtonText('Save & Continue');

		// save bit for stepOne

		// for saving data to 'steptwos' collection
		if (formStep === 1) {
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 2) {
			newVerCtx.stepOneSaver();
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 3) {
			// format request body;

			debugger;

			stepTwoState.low.map((iss) => {
				iss['issueImpactType'] = 'low';
				return null;
			});
			stepTwoState.medium.map((iss) => {
				iss['issueImpactType'] = 'medium';
				return null;
			});

			stepTwoState.high.map((iss) => {
				iss['issueImpactType'] = 'high';
				return null;
			});

			stepTwoState.critical.map((iss) => {
				iss['issueImpactType'] = 'critical';
				return null;
			});

			console.log(stepTwoState);
			let requestBody = {
				issues: [
					...stepTwoState.low,
					...stepTwoState.medium,
					...stepTwoState.high,
					...stepTwoState.critical,
				],
			};

			setSaveButtonText('Saving...');
			console.log(requestBody);

			//console.log('step two state in my progressjs', stepTwoState);

			const response = await createIssues(newVerCtx.versionId, requestBody);
			console.log('steptwo in my progress', response);

			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 4) {
			//console.log('stepThreeState in my progress', stepThreeState);

			setSaveButtonText('Saving...');
			const response = await createFeelings(
				newVerCtx.versionId,
				stepThreeState
			);
			setSaveButtonText('Save & Continue');

			if (response.success === false) {
				setSaveButtonText('try again');
				return;
			}
			setFormStep(parseInt(formStep) + 1);
			//console.log('data from Server For Step Three', response.data);
		} else if (formStep === 5) {
			setSaveButtonText('Saving...');
			const requestObj = {
				tags: stepFourState.tags,
			};
			const response = await createTags(newVerCtx.versionId, requestObj);
			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}
			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 6) {
			setSaveButtonText('Saving...');

			const response = await createActions(newVerCtx.versionId, {
				actions: [...stepFiveState.actions],
			});

			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}
			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 7) {
			setSaveButtonText('Saving...');

			const response = await createContacts(newVerCtx.versionId, stepSixState);
			console.log(response);

			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}

			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 8) {
			setSaveButtonText('Saving...');
			//console.log(stepSevenState);

			const prevState = { ...stepSevenState };

			prevState.thoughts.first.map((thg) => {
				thg['thoughtCategory'] = 'likely';
				thg['thoughtContent'] = thg.thgContent;
				return null;
			});
			prevState.thoughts.second.map((thg) => {
				thg['thoughtCategory'] = 'real';
				thg['thoughtContent'] = thg.thgContent;
				return null;
			});
			prevState.thoughts.third.map((thg) => {
				thg['thoughtCategory'] = 'probably';
				thg['thoughtContent'] = thg.thgContent;
				return null;
			});
			prevState.thoughts.fourth.map((thg) => {
				thg['thoughtCategory'] = 'unrealistic';
				thg['thoughtContent'] = thg.thgContent;
				return null;
			});

			const requestBody = {
				thoughts: [
					...prevState.thoughts.first,
					...prevState.thoughts.second,
					...prevState.thoughts.third,
					...prevState.thoughts.fourth,
				],
			};

			//console.log(requestBody);

			const response = await createThoughts(newVerCtx.versionId, requestBody);
			//console.log(response);
			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}

			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 9) {
			setSaveButtonText('Saving...');
			const requestObj = {
				tags: stepEightState.tags,
			};
			const response = await createStep8Tags(newVerCtx.versionId, requestObj);
			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}
			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 10) {
			setSaveButtonText('Saving...');

			const response = await createGoals(newVerCtx.versionId, {
				goals: stepNineState.goals,
			});
			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}
			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 11) {
			setSaveButtonText('Saving...');

			const requestBody = {
				tags: [
					...stepTenState.firstTags,
					...stepTenState.secondTags,
					...stepTenState.thirdTags,
				],
			};
			const response = await createStep10Tags(newVerCtx.versionId, {
				tags: requestBody.tags,
			});
			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}
			setSaveButtonText('Save & Continue');
			setFormStep(parseInt(formStep) + 1);
		} else if (formStep === 12) {
			console.log('i am here');
			setSaveButtonText('Saving...');

			stepElevenState.firstValues.map((s) => {
				s['step'] = '1';
				return null;
			});
			stepElevenState.secondValues.map((s) => {
				s['step'] = '2';
				return null;
			});
			stepElevenState.thirdValues.map((s) => {
				s['step'] = '3';
				return null;
			});
			stepElevenState.fourthValues.map((s) => {
				s['step'] = '4';
				return null;
			});
			stepElevenState.fifthValues.map((s) => {
				s['step'] = '5';
				return null;
			});

			const requestBody = {
				benefits: [
					...stepElevenState.firstValues,
					...stepElevenState.secondValues,
					...stepElevenState.thirdValues,
					...stepElevenState.fourthValues,
					...stepElevenState.fifthValues,
				],
			};
			const response = await createBenefits(newVerCtx.versionId, {
				benefits: requestBody.benefits,
			});
			if (response.success === false) {
				setSaveButtonText('try again!');
				return;
			}

			navigate('/dashboard');
			setSaveButtonText('See Results');
			navigate('/lastPage');
		}
	};

	const stateChangeHandler = (state) => {
		//console.log('step two state in my progress.js');
		setStepTwoState(state);
	};
	const stepsHandler = (event) => {
		//for StepOne Values

		if (Number(event.target.id) === 12) {
			setSaveButtonText('See Results');
		} else {
			setSaveButtonText('Save & Continue');
		}
		setFormStep(parseInt(event.target.id));
	};

	//console.log('formStemp', formStep);

	useEffect(() => {
		setFormStep(newVerCtx.currentStep);
	}, [newVerCtx.currentStep]);


	return (
		<main className={classes['Body']}>
			<section className={classes['sectionOneMobile']} >
				<div
					className={
						formStep === 1
							? `${classes['progressStepMobile']}  ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='1'
				>	
					Introduction
				</div>
				<div
					className={
						formStep === 2
							? `${classes['progressStepMobile']}  ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='2'
				>
					Step 1
				</div>
				<div
					className={
						formStep === 3
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='3'
				>
					Step 2
				</div>
				<div
					className={
						formStep === 4
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='4'
				>
					Step 3
				</div>
				<div
					className={
						formStep === 5
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='5'
				>
					Step 4
				</div>
				<div
					className={
						formStep === 6
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='6'
				>
					Step 5
				</div>
				<div
					className={
						formStep === 7
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='7'
				>
					Step 6
				</div>
				<div
					className={
						formStep === 8
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='8'
				>
					Step 7
				</div>
				<div
					className={
						formStep === 9
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='9'
				>
					Step 8
				</div>
				<div
					className={
						formStep === 10
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='10'
				>
					Step 9
				</div>
				<div
					className={
						formStep === 11
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='11'
				>
					Step 10
				</div>
				<div
					className={
						formStep === 12
							? `${classes['progressStepMobile']} ${classes['progressStepMobile-Active']}`
							: `${classes['progressStepMobile']}`
					}
					onClick={stepsHandler} id='12'
				>
					Step 11
				</div>


			</section>
			<section className={classes['sectionOne']}>
				<h5 className={classes['progress']}>MY PROGRESS</h5>

				<div
					className={classes['progressbar']}
					// style={{ overflow: 'scroll', height: '900px' }}
				>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 1
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								id='showStep1'
								style={{
									backgroundColor: `${formStep > 1 ? 'white' : ''}`,
								}}
							>
								{formStep > 1 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='1' className={classes['step-text']}>
								Introduction
							</div>
							<div>My Therapy Tool Introduction</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 2
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								id='showStep2'
								style={{
									backgroundColor: `${formStep > 2 ? 'white' : ''}`,
								}}
							>
								{formStep > 2 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='2' className={classes['step-text']}>
								Step 1 of 11
							</div>
							<div>What is bothering you?</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 3
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 3 ? 'white' : ''}`,
								}}
							>
								{formStep > 3 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='3' className={classes['step-text']}>
								Step 2 of 11
							</div>
							<div>
								Prioritize the issues from step one in <br />
								The Threat Level Matrix
							</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 4
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 4 ? 'white' : ''}`,
								}}
							>
								{formStep > 4 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='4' className={classes['step-text']}>
								Step 3 of 11
							</div>
							<div>Identify and eliminate non-productive coping methods</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 5
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 5 ? 'white' : ''}`,
								}}
							>
								{formStep > 5 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='5' className={classes['step-text']}>
								Step 4 of 11
							</div>
							<div>
								Replace non-productive coping methods with "Mean Time Tools"{' '}
								<br />
								{/* Replace non productive coping methods with "Main Time Tools" */}
							</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 6
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 6 ? 'white' : ''}`,
								}}
							>
								{formStep > 6 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='6' className={classes['step-text']}>
								Step 5 of 11
							</div>
							<div>Take Action.</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 7
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 7 ? 'white' : ''}`,
								}}
							>
								{formStep > 7 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='7' className={classes['step-text']}>
								Step 6 of 11
							</div>
							<div>Reach Out: Loneliness and connections.</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 8
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 8 ? 'white' : ''}`,
								}}
							>
								{formStep > 8 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='8' className={classes['step-text']}>
								Step 7 of 11
							</div>
							<div>Identify and eliminate 'The Monkey Mind'</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 9
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 9 ? 'white' : ''}`,
								}}
							>
								{formStep > 9 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='9' className={classes['step-text']}>
								Step 8 of 11
							</div>
							<div>Practice Gratitude and Faith</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 10
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 10 ? 'white' : ''}`,
								}}
							>
								{formStep > 10 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='10' className={classes['step-text']}>
								Step 9 of 11
							</div>
							<div>Create a Vision Board of goals and dreams</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 11
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
								style={{
									backgroundColor: `${formStep > 11 ? 'white' : ''}`,
								}}
							>
								{formStep > 11 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='11' className={classes['step-text']}>
								Step 10 of 11
							</div>
							<div>
								Write down and review your Life Rules.
								<br />
								Breakthroughs and Realizations.
							</div>
						</div>
					</div>
					<div className={classes['inlineProgress']}>
						<div>
							<div
								className={
									formStep === 12 || formStep === 13
										? `${classes['progressStep']}  ${classes['progressStep-Active']}`
										: `${classes['progressStep']}`
								}
							>
								{formStep > 12 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='12' className={classes['step-text']}>
								Step 11 of 11
							</div>
							<div>Monitor Progress with your personal setting.</div>
						</div>
					</div>
				</div>
			</section>
			<section className={classes['sectionTwo']}>
				{/* <div>{arrayOfSteps[formStep]}</div> */}

				{formStep === 1 && <Introduction />}
				{formStep === 2 && <StepOne />}
				{formStep === 3 && <StepTwo onStateChange={stateChangeHandler} />}
				{formStep === 4 && (
					<StepThree onStateChange={(state) => setStepThreeState(state)} />
				)}
				{formStep === 5 && (
					<StepFour onStateChange={(state) => setStepFourState(state)} />
				)}
				{formStep === 6 && (
					<StepFive onStateChange={(state) => setStepFiveState(state)} />
				)}
				{formStep === 7 && (
					<StepSix onStateChange={(state) => setStepSixState(state)} />
				)}
				{formStep === 8 && (
					<StepSeven onStateChange={(state) => setStepSevenState(state)} />
				)}
				{formStep === 9 && (
					<StepEight onStateChange={(state) => setStepEightState(state)} />
				)}
				{formStep === 10 && (
					<StepNine onStateChange={(state) => setStepNineState(state)} />
				)}
				{formStep === 11 && (
					<StepTen onStateChange={(state) => setStepTenState(state)} />
				)}
				{formStep === 12 && (
					<StepEleven onStateChange={(state) => setStepElevenState(state)} />
				)}

				<div className={classes['prevOrSave']}>
					<button className={classes['buttonPrevious']} onClick={() => prevHandler()}>
						Previous
					</button>
					<button className={classes['buttonSave']} onClick={() => nextHandler()}>
						{saveButtonText}
					</button>
				</div>
			</section>
		</main>
	);
};

export default MyProgress;
