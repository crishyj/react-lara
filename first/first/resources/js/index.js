import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App component
import App from './components/App'

require('./bootstrap');
// change the getElementId from example to app 
// render App component instead of Example
console.log('app');
if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}