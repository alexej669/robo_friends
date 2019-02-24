import React from 'react';

const Searchbox = ({ SearchBar,searchChange }) => {
	return (
		<div className = 'pa2'>
			<input className = 'pa3 ba b--green bg-lightest-blue'
				onChange = {searchChange}
				type = 'search' 
				placeholder = 'robot search'/>
		</div>
	);
} 

export default Searchbox;