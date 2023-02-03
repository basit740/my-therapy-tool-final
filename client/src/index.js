import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './store/auth-context';
import { NewVersionContextProvider } from './store/new-version-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<AuthContextProvider>
		<NewVersionContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</NewVersionContextProvider>
	</AuthContextProvider>,
	document.getElementById('root')
);

reportWebVitals();
