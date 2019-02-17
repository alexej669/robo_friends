import React from 'react';

const Searchbar = ({ searchfield, searchChange}) => {
	return (
		<div className = 'pa2'>
			<input className = 'pa3 ba b--green bg-lightest-blue'
				onChange = {searchChange}
				type = 'text' 
				placeholder = 'robot search'/>
		</div>
	);
} 

export default Searchbar;