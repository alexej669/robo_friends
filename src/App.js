import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css'
import Scroll from './Scroll'


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
	
  	return !this.state.robots.length?
  	<h1> Loading </h1> :(
 		<div className ='tc'>
 			<h1 className = 'f1'> Robofriends </h1>
 			<Searchbox searchChange = {this.onSearchChange}/>
 			<Scroll>
 				<Cardlist robots ={filteredRobots}/>
 			</Scroll>
 		</div>
 	);

 }
}

export default App;