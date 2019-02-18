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

componentDidMound() {
	const k = fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	// .then(users=>this.setState({robots:users}));
console.log(k);
}


onSearchChange=(event)=>{
	this.setState({Searchbar: event.target.value})	

}
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