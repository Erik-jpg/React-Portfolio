import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ButtonMailto from './components/Contact';
import './stylesheet.css';

ReactDOM.render(
    <App />,
    <ButtonMailto label="Send me an email" mailto="mailto:spologas@gmail.com" />,
    document.getElementById('root')
);