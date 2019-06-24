import React, {Component} from 'react';

class Table extends Component {
	constructor(props){
		super(props);
		this.state={
			isChecked: false
		}
		this.onCheck = this.onCheck.bind(this);
	}

onCheck() {
	this.setState({isChecked: !this.state.isChecked});
  	}	

render(){
	const {themes, onRouteChange} = this.props;
	const {isChecked} = this.state;
	const themeNames= themes.map(item => item.themeName);
	const inHomePageTrue= themes.filter(item => item.inHomePage);
	const themeNamesTrue= inHomePageTrue.map(item => item.themeName);
	
	let txt=``;
	 if (this.state.isChecked)
	 {
      txt = `Currently seeing public themes`
     }
     else 
     {
      txt= `Check to see public themes`
     }
	
    return ( 
    	<div>
    		<div className="flex justify-end pr5 pt3 pb2 pl7">
    			<span>{txt}&nbsp;&nbsp;</span> 
    			<span><input type='checkbox' onClick = {this.onCheck}/></span>
    		</div>
    		<div className="pa3">
    			<div className="overflow-auto">
    				<table className="f6 w-100 center" cellSpacing="0">
    					<thead>
    					<tr>
    					<th className="fw6 bb b--black-20 tl white pb3 pr3 bg-blue pl4 pb2 pt3">#</th>
    					<th className="fw6 bb b--black-20 white pb3 bg-blue pr7 pt3 pb2">Name</th>         
    					</tr>
    					</thead>

    				<tbody className="lh-copy">
    					{   !isChecked
    						?themeNames.map((item,i) => { return (
    						<tr  key={i}>
    						<td className="pv3 pr3 pl4 bb b--black-20">{i+1}</td>	
    						<td style= {{cursor:'pointer'}} onClick = {() =>onRouteChange(item)} className="pv3 pr3 bb tc pr7 b--black-20">{item}</td>
    						</tr>
    								)
    							})
    						:themeNamesTrue.map((item,i) => { return (
    						<tr key={i}>
    						<td className="pv3 pr3 pl4 bb b--black-20">{i+1}</td>	
    						<td style= {{cursor:'pointer'}} onClick ={() => onRouteChange(item)} className="pv3 pr3 bb tc pr7 b--black-20">{item}</td>
    						</tr>
    								)
    							})
    					}
					</tbody>
					</table>
				</div>
			</div>
		</div>

	)
}

}

export default Table;