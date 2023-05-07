import React from 'react';
import '../../stylesheets/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='App-header'>
			<Link to='/'>Trivia</Link>
			<Link to='/'>List</Link>
			<Link to='/add'>Add</Link>
			<Link to='/play'>Play</Link>
		</div>
	);
}
