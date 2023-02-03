import React, { useRef, useEffect } from 'react';

import classes from './Modal.module.css';

const Modal = ({
	title,
	inputs,
	onClose,
	onSubmit,
	modalIsOpen,
	request,
	onInput,
}) => {
	//const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef();

	const modalHider = (event) => {
		event.preventDefault();
		onClose();
	};

	const submitHandler = (event) => {
		event.preventDefault();

		onSubmit(inputRef.current.value);
	};

	useEffect(() => {
		inputRef.current.focus();
	});

	return (
		<>
			{modalIsOpen && (
				<div className={classes.modal}>
					<div className={classes['modal-content']}>
						<h2>{title}</h2>
						<form onSubmit={submitHandler}>
							{inputs.map((input) => {
								return (
									<div className={classes['input-control']}>
										<label>{input.label}</label>
										<input
											style={{ borderColor: request.error ? `red` : '' }}
											type={input.type}
											placeholder={input.placeholder}
											ref={inputRef}
											onChange={onInput}
										/>
									</div>
								);
							})}
							<div className={classes['error-container']}>
								{request.error && <label>{request.error}</label>}
							</div>
							<div className={classes['input-actions']}>
								<button onClick={modalHider}>Cancel</button>
								<button type='submit'>
									{request.sending ? request.feedback : 'Submit'}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
