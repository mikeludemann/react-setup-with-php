import React from 'react';
import logo from './logo.svg';
import Form from './components/form/index';
import './App.css';

function App() {

	const config = {
		api: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/${process.env.API_PATH}`,
		title: 'Contact Us',
		successMessage: 'Thank you for contacting us.',
		errorMessage: 'Sorry, but we have a problem or something went wrong.',
		fields:{
			firstName: '',
			lastName: '',
			email: '',
			message: ''
		},
		configurationFields: [
			{ id: 1, label: 'First Name', fieldName: 'firstName', type: 'text', placeholder: 'First Name', isRequired: true , nameClass: 'firstname'},
			{ id: 2, label: 'Last Name', fieldName: 'lastName', type: 'text', placeholder: 'Last Name', isRequired: true , nameClass: 'lastname'},
			{ id: 3, label: 'E-Mail', fieldName: 'email', type: 'email', placeholder: 'E-Mail', isRequired: true , nameClass: 'email'},
			{ id: 4, label: 'Message', fieldName: 'message', type: 'textarea', placeholder: 'Message', isRequired: true , nameClass: 'message'}
		]
	}

	return (
		<div className="app">
			<header className="app--header">
				<img src={logo} className="app--logo" alt="logo" />
			</header>
			<section id="content">
				<Form config={config}/>
			</section>
			<footer className="app--footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
