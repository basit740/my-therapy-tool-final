import React, { useEffect, useReducer, useContext } from 'react';
import Step11Context from '../../../../../store/step-eleven';
import NewVersionContext from '../../../../../store/new-version-context';
import FiveSliders from '../../../UtilityComponents/FiveSliders/FiveSliders';

import { getBenefits } from '../../../../../api/stepEleven';

import classes from './SliderSteps.module.css';

//import { slidersData } from '../../../../../data/slidersData';
import reducer, { initialState, ACTIONS } from './reducer';
import Dots from './Dots';

const prevButtonText = '< PREVIOUS';

const SliderSteps = (props) => {
	const [myState, disptach] = useReducer(reducer, initialState);

	const s11Ctx = useContext(Step11Context);
	const newVerCtx = useContext(NewVersionContext);

	const prevHandler = () => {
		switch (myState.currentStep) {
			case '1':
				s11Ctx.onStateChange(myState.firstValues, '1');
				break;
			case '2':
				s11Ctx.onStateChange(myState.secondValues, '2');
				break;
			case '3':
				s11Ctx.onStateChange(myState.thirdValues, '3');
				break;
			case '4':
				s11Ctx.onStateChange(myState.fourthValues, '4');
				break;
			default:
				s11Ctx.onStateChange(myState.fifthValues, '5');
		}

		disptach({
			type: ACTIONS.PREV,
		});
	};
	const nextHandler = () => {
		switch (myState.currentStep) {
			case '1':
				s11Ctx.onStateChange(myState.firstValues, '1');
				break;
			case '2':
				s11Ctx.onStateChange(myState.secondValues, '2');
				break;
			case '3':
				s11Ctx.onStateChange(myState.thirdValues, '3');
				break;
			case '4':
				s11Ctx.onStateChange(myState.fourthValues, '4');
				break;
			default:
				s11Ctx.onStateChange(myState.fifthValues, '5');
		}
		disptach({
			type: ACTIONS.NEXT,
		});
	};

	useEffect(() => {
		props.onStateChange(myState);
	}, [myState, props]);

	useEffect(() => {
		console.log('useEffect 2 slidersStep', myState);
		(async () => {
			const response = await getBenefits(newVerCtx.versionId);

			if (response.success && response.data.length > 0) {
				disptach({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: {
						data: response.data,
					},
				});
			} else {
				disptach({
					type: ACTIONS.DATA_FROM_LOCAL_STATE,
				});
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section className={classes['slider-steps-container']}>
			<Dots
				isLoading={myState.isLoading}
				currentStep={myState.currentStep}
				onDotClick={(stepNumber) => {
					disptach({
						type: ACTIONS.DOT_CLICK,
						payload: { step: stepNumber },
					});
				}}
			/>
			<div className={classes['slider-steps__content']}>
				{myState.currentStep === '1' && (
					<FiveSliders
						id='1'
						values={myState.firstValues}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '1', sliderID: sliderID },
							});
						}}
						isLoading={myState.isLoading}
					/>
				)}

				{myState.currentStep === '2' && (
					<FiveSliders
						id='2'
						values={myState.secondValues}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '2', sliderID: sliderID },
							});
						}}
						isLoading={myState.isLoading}
					/>
				)}
				{myState.currentStep === '3' && (
					<FiveSliders
						id='3'
						values={myState.thirdValues}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '3', sliderID: sliderID },
							});
						}}
						isLoading={myState.isLoading}
					/>
				)}

				{myState.currentStep === '4' && (
					<FiveSliders
						id='4'
						values={myState.fourthValues}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '4', sliderID: sliderID },
							});
						}}
						isLoading={myState.isLoading}
					/>
				)}

				{myState.currentStep === '5' && (
					<FiveSliders
						id='5'
						values={myState.fifthValues}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '5', sliderID: sliderID },
							});
						}}
						isLoading={myState.isLoading}
					/>
				)}
			</div>

			<div className={classes.actions}>
				<div
					className={
						!myState.showPrevBtn ? `${classes.hidden}` : `{${classes.shown}}`
					}
					onClick={prevHandler}
				>
					{' '}
					{prevButtonText}
				</div>
				<div
					className={
						!myState.showNextBtn ? `${classes.hidden}` : `{${classes.shown}}`
					}
					onClick={nextHandler}
				>
					{' '}
					NEXT >{' '}
				</div>
			</div>
		</section>
	);
};

export default SliderSteps;
