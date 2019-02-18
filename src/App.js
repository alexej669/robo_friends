import React, {Component} from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import Searchbox from './Searchbox';


class App extends Component{
constructor(){
	super()
	this.state = {
	robots:robots, Searchbar:''
	}
}

onSearchChange=(event)=>{
	this.setState({Searchbar: event.target.value})
	// console.log(this.state.Searchbar)

	
	

}
 render(){
 	const filteredRobots = this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.Searchbar.toLowerCase())
	})
  	return(
 		<div className ='tc'>
 			<h1> Robofriends </h1>
 			<Searchbox searchChange = {this.onSearchChange}/>
 			<Cardlist robots ={filteredRobots}/>
 		</div>
 	);
 }
}

export default App;