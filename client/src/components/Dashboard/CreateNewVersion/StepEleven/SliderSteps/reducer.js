import { slidersData } from '../../../../../data/slidersData';

export const ACTIONS = {
	NEXT: 'next',
	PREV: 'prev',
	FIRST_VALUES: 'first_values',
	SECOND_VALUES: 'second_values',
	THIRD_VALUES: 'third_values',
	FOURTH_VALUES: 'fourth_values',
	FIFTH_VALUES: 'fifth_values',
	VALUES: 'values',
	DOT_CLICK: 'dot_click',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};

export const initialState = {
	currentStep: '1',
	showNextBtn: true,
	showPrevBtn: false,
	firstValues: [
		{
			id: '1',
			title: 'Happier',
			value: 1,
		},
		{
			id: '2',
			title: 'Less stressed',
			value: 1,
		},
		{
			id: '3',
			title: 'More optimistic',
			value: 1,
		},
		{
			id: '4',
			title: 'Excited',
			value: 1,
		},
		{
			id: '5',
			title: 'Focused',
			value: 1,
		},
	],
	secondValues: [
		{
			id: '6',
			title: 'Better habits',
			value: 1,
		},
		{
			id: '7',
			title: 'More patience',
			value: 1,
		},
		{
			id: '8',
			title: 'I am more motivated',
			value: 1,
		},
		{
			id: '9',
			title: 'I am more grateful',
			value: 1,
		},
		{
			id: '10',
			title: 'I am more active',
			value: 1,
		},
	],
	thirdValues: [
		{
			id: '11',
			title: 'Wiser',
			value: 1,
		},
		{
			id: '12',
			title: 'Peaceful',
			value: 1,
		},
		{
			id: '13',
			title: 'Hopeful',
			value: 1,
		},
		{
			id: '14',
			title: 'Less lonely',
			value: 1,
		},
		{
			id: '15',
			title: 'More accepting',
			value: 1,
		},
	],
	fourthValues: [
		{
			id: '16',
			title: 'Greater Sense of Identity',
			value: 1,
		},
		{
			id: '17',
			title: 'More forgiving',
			value: 1,
		},
		{
			id: '18',
			title: 'More purpose',
			value: 1,
		},
		{
			id: '19',
			title: 'More mature',
			value: 1,
		},
		{
			id: '20',
			title: 'Less procrastination',
			value: 1,
		},
	],
	fifthValues: [
		{
			id: '21',
			title: 'More confident',
			value: 1,
		},
		{
			id: '22',
			title: 'Better self-control',
			value: 1,
		},
		{
			id: '23',
			title: 'Less judgmental',
			value: 1,
		},
		{
			id: '24',
			title: 'Eating Well',
			value: 1,
		},
		{
			id: '25',
			title: 'Exercising',
			value: 1,
		},
	],
	total: 25,

	slidersData: slidersData,
	isLoading: true,
};

export default function reducer(state, action) {
	const prevState = { ...state };

	switch (action.type) {
		case ACTIONS.NEXT:
			switch (prevState.currentStep) {
				case '1':
					prevState.currentStep = '2';
					prevState.showPrevBtn = true;
					break;
				case '2':
					prevState.currentStep = '3';
					break;
				case '3':
					prevState.currentStep = '4';
					break;
				case '4':
					prevState.currentStep = '5';
					prevState.showNextBtn = false;
					break;
				default:
				// do nothing
			}
			break;

		case ACTIONS.PREV:
			switch (prevState.currentStep) {
				case '2':
					prevState.currentStep = '1';
					prevState.showPrevBtn = false;
					prevState.showNextBtn = true;
					break;
				case '3':
					prevState.currentStep = '2';
					break;
				case '4':
					prevState.currentStep = '3';
					//prevState.showNextBtn = false;
					break;
				case '5':
					prevState.currentStep = '4';
					//prevState.showPrevBtn = false;
					prevState.showNextBtn = true;
					break;
				default:
				// do nothing
			}
			break;

		case ACTIONS.VALUES:
			//prevState.firstValues = [];
			// prevState.secondValues = [];
			// prevState.thirdValues = [];
			// prevState.fourthValues = [];
			// prevState.fifthValues = [];

			switch (action.payload.step) {
				case '1':
					prevState.firstValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}

						return sliderV;
					});

					break;
				case '2':
					prevState.secondValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}

						return sliderV;
					});
					break;
				case '3':
					prevState.thirdValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}

						return sliderV;
					});
					break;
				case '4':
					prevState.fourthValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}

						return sliderV;
					});
					break;
				case '5':
					prevState.fifthValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}

						return sliderV;
					});
					break;
				default:
				//
			}

			prevState.total = 0;
			prevState.firstValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.secondValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.thirdValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.fourthValues.forEach((v) => {
				prevState.total += v.value;
			});

			prevState.fifthValues.forEach((v) => {
				prevState.total += v.value;
			});
			break;
		case ACTIONS.DOT_CLICK:
			if (prevState.currentStep === action.payload.step) return prevState;
			prevState.currentStep = action.payload.step;
			if (action.payload.step !== '1') {
				prevState.showPrevBtn = true;
			} else {
				prevState.showPrevBtn = false;
			}

			if (action.payload.step === '5') {
				prevState.showNextBtn = false;
			} else {
				prevState.showNextBtn = true;
			}
			break;
		case ACTIONS.DATA_FROM_SERVER:
			const data = action.payload.data;

			prevState.firstValues = [];
			prevState.secondValues = [];
			prevState.thirdValues = [];
			prevState.fourthValues = [];
			prevState.fifthValues = [];

			data.map((v) => {
				v['id'] = v._id;
				switch (v.step) {
					case '1':
						prevState.firstValues = [...prevState.firstValues, v];
						break;
					case '2':
						prevState.secondValues = [...prevState.secondValues, v];
						break;
					case '3':
						prevState.thirdValues = [...prevState.thirdValues, v];
						break;
					case '4':
						prevState.fourthValues = [...prevState.fourthValues, v];
						break;
					case '5':
						prevState.fifthValues = [...prevState.fifthValues, v];
						break;
					default:
					// do nothing
				}
				return v;
			});

			prevState.total = 0;
			prevState.firstValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.secondValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.thirdValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.fourthValues.forEach((v) => {
				prevState.total += v.value;
			});

			prevState.fifthValues.forEach((v) => {
				prevState.total += v.value;
			});
			prevState.isLoading = false;
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			prevState.firstValues = [
				{
					id: '1',
					title: 'Happier',
					value: 1,
				},
				{
					id: '2',
					title: 'Less stressed',
					value: 1,
				},
				{
					id: '3',
					title: 'More optimistic',
					value: 1,
				},
				{
					id: '4',
					title: 'Excited',
					value: 1,
				},
				{
					id: '5',
					title: 'Focused',
					value: 1,
				},
			];

			prevState.secondValues = [
				{
					id: '6',
					title: 'Better habits',
					value: 1,
				},
				{
					id: '7',
					title: 'More patience',
					value: 1,
				},
				{
					id: '8',
					title: 'I am more motivated',
					value: 1,
				},
				{
					id: '9',
					title: 'I am more grateful',
					value: 1,
				},
				{
					id: '10',
					title: 'I am more active',
					value: 1,
				},
			];
			prevState.thirdValues = [
				{
					id: '11',
					title: 'Wiser',
					value: 1,
				},
				{
					id: '12',
					title: 'Peaceful',
					value: 1,
				},
				{
					id: '13',
					title: 'Hopeful',
					value: 1,
				},
				{
					id: '14',
					title: 'Less lonely',
					value: 1,
				},
				{
					id: '15',
					title: 'More accepting',
					value: 1,
				},
			];
			prevState.fourthValues = [
				{
					id: '16',
					title: 'Greater Sense of Identity',
					value: 1,
				},
				{
					id: '17',
					title: 'More forgiving',
					value: 1,
				},
				{
					id: '18',
					title: 'More purpose',
					value: 1,
				},
				{
					id: '19',
					title: 'More mature',
					value: 1,
				},
				{
					id: '20',
					title: 'Less procrastination',
					value: 1,
				},
			];
			prevState.fifthValues = [
				{
					id: '21',
					title: 'More confident',
					value: 1,
				},
				{
					id: '22',
					title: 'Better self-control',
					value: 1,
				},
				{
					id: '23',
					title: 'Less judgmental',
					value: 1,
				},
				{
					id: '24',
					title: 'Eating Well',
					value: 1,
				},
				{
					id: '25',
					title: 'Exercising',
					value: 1,
				},
			];
			prevState.isLoading = false;
			break;

		default:
		// do nothing..
	}

	return prevState;
}
