import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css'


class App extends Component{
constructor(){
	super()
	this.state = {
	robots:[], 
	Searchbar:''
	}
	
}



onSearchChange=(event)=>{
	this.setState({Searchbar: event.target.value})	
}

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json())
.then(Users=>this.setState({robots:Users}))}

 render(){
 	const filteredRobots = this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.Searchbar.toLowerCase())
	})
	
  	return(
 		<div className ='tc'>
 			<h1 className = 'f1'> Robofriends </h1>
 			<Searchbox searchChange = {this.onSearchChange}/>
 			<Cardlist robots ={filteredRobots}/>
 		</div>
 	);

 }
}

export default App;