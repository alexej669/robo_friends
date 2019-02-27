import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css'
import Scroll from './Scroll'

import {setSearchField, requestRobots} from './actions'

const mapStateToProps = state =>{
	return{
		SearchBar:state.searchRobots.SearchBar,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error

	}}

const mapDispatchToProps = (dispatch) => {
	return{
		searchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots:() => dispatch(requestRobots())
	}
}


class App extends Component{

componentDidMount() {
	this.props.onRequestRobots();
}
 render(){
 	const {SearchBar,searchChange,robots,isPending} =this.props;
 	const filteredRobots = robots
 	.filter(robot=>{
		return robot.name.toLowerCase().includes(SearchBar.toLowerCase())
	})
	
  	return isPending?
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