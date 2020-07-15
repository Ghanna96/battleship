import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    min-height: 100%;
    height: 100%;
}
body {
    font: 1em/1.25 "PT Sans",arial,sans-serif;
	margin: 0;
    padding: 0;
    position: relative;
    overflow-y: scroll;
    cursor: default;
    min-height: 100%;
    background: #fff;
    height: 100%;
}
`;

const ReactApp = () => (
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);

ReactDOM.render(ReactApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
