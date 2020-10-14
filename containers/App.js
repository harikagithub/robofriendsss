import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robotnames } from '../components/robotnames';
import './App.css';
import Scroll from '../components/Scroll.js'

class App extends Component {
 constructor(){
	super()
	this.state={
	robotnames: robotnames ,
	searchfield: ''
  }
} 
//componentDidMount() {
	//fetch('https://jsonplaceholder.typicode.com/users')
	  //.then( response => response.json())
	  //.then( users=> this.setState({robotnames: users}));
// }

onSearchChange = (event) =>{ 
	this.setState({ searchfield: event.target.value })
}
render(){
	const {robotnames , searchfield}= this.state;
	const filteredrobotnames =robotnames.filter(robotname =>{
	return robotname.name.toLowerCase().includes(searchfield.toLowerCase());
})
	return !robotnames.length ?
	<h1>Loading</h1>:
	
	 (
	 <div className='tc'>
	   <h1 className='f1'>RoboFriends</h1>
	   <SearchBox searchChange={this.onSearchChange}/>
	   <Scroll>
       <CardList robotnames={filteredrobotnames}/>
       </Scroll>
     </div>

	);
  
 }
}
export default App;