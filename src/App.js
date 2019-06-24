import React, { Component } from 'react';
import Table from './Components/Table';
import Books from './Components/Books';

class App extends Component {
	constructor(){
		super();
		this.state= {
			list: {},
			themes: [],
			route: 'home',			
		}
	}

	componentDidMount() {
		fetch('https://newprod.zypher.co/admin/themes/getAllThemes')
			 .then(response => response.json()) 
			 .then(list => {this.setState({list, 
			 	  themes: list.themes
			 	  })
			 });			
	};

	onRouteChange = (theme) =>{
	if(theme !== 'home')
	{
	 this.setState({route:theme})	
 	}
 	else
 	{
 	 this.setState({route:'home'})
 	}
    };

	render() {
		const {themes, route} = this.state;
		return(
		<div>
		{
		route === 'home' 
		?<Table themes = {themes} onRouteChange={this.onRouteChange}/>
		:<Books themes = {themes} route={route} onRouteChange={this.onRouteChange} />	
		}
		</div>
		)
	}
}
export default App;