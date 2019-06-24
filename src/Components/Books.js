import React, {Component} from 'react';
import './Books.css'

class Books extends Component{

	render(){
		const {themes,route} = this.props;
		const currentTheme = themes.filter(item => item.themeName === route)
		const books = currentTheme.map(item => item.books);
		const productName = books[0].map(item => item.productName);
		const authorName = books[0].map(item => item.authorName);
		const imageURL = books[0].map(item => item.imageURL);

		return(
				<div>
					{	
						productName.map((item,i) =>{
							return(
									
									<div className="fl w-50-m w-50 pa2 flex" >
								

									<div key={item} className="pl3 dib pa1 w-25-s" >
									<img id='inputimage' alt='' src={imageURL[i]} width='120px' height='140px' /> 
									</div>
									
									<div className="db">
										
																								
									
									<div className="w-75 w-25-s pa1 pb0 ">
									<button className="deleteButton ml7 ml5-m ml0-s">-</button>
									<p>{productName[i]}</p>

									</div>
									<div className='w-100 w-25-s f6 mid-gray pa1 pt0'>
									<p>{authorName[i]}</p>
									
									</div>
									</div>
									
									</div>
									
									
									
								)
						})


					}
				</div>


		 );
	}

}

export default Books;