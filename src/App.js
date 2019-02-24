import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css'
import Scroll from './Scroll'

import {setSearchField} from './actions'

const mapStateToProps = state =>{return{SearchBar:state.SearchBar}}

const mapDispatchToProps = (dispatch) => {
	return{
		searchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}


class App extends Component{
constructor(){
	super()
	this.state = {
	robots:[]
	}	
}

componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users').then(Response=>Response.json())
.then(Users=>this.setState({robots:Users}))}


 render(){
 	const {robots} =this.state;
 	const {SearchBar,searchChange} =this.props;
 	const filteredRobots = robots
 	.filter(robot=>{
		return robot.name.toLowerCase().includes(SearchBar.toLowerCase())
	})
	
  	return !this.state.robots.length?
  	<h1> Loading </h1> :(
 		<div className ='tc'>
 			<h1 className = 'f1'> Robofriends </h1>
 			<Searchbox searchChange = {searchChange}/>
 			<Scroll>
 				<Cardlist robots ={filteredRobots}/>
 			</Scroll>
 		</div>
 	);

 }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);