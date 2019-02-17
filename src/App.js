import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import Searchbar from './Searchbar';


class App extends Component{
constructor(){
	super()
	this.state = {
	robots:robots,
	Searchbar:''
}
const = onSearchChange(event)=>{
	console.log(event.target.value);
}

}
 render(){
 	return(
 		<div className ='tc'>
 			<h1> Robofriends </h1>
 			<Searchbar searchChange = {this.onSearchChange}/>
 			<Cardlist robots ={robots}/>
 		</div>
 	);
 }
}

export default App;