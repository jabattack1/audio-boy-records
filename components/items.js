import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

import Navbar3 from './navbar3.js';
import ShoppingCart from './shopping-cart.js';

import '../script.js';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';

class Items extends React.Component{

	
	constructor(props){

	    super(props)

	    this.addToCart = this.addToCart.bind(this);

	    let store = this.props.store;
	   	let itemNumber = this.props.code.code;

	    let result = store.filter(obj => {
  			return obj.code === itemNumber
		})

	    if(result){
			result.map((e) => 
			   	this.state = {
					image1:e.display_src,
					name:e.name,
					price:e.price,
					description:e.description,
					color:e.color,
					size:''
				}
			)
		}
		else{
			this.state = {
					image1:'',
					name:'',
					price:'',
					description:'',
					color:'',
					size:''
				}
		}
  
	}

	state ={

	}

	render(props){
		const check = function(el) {
		
			var button = document.getElementById("button");

			var nbr_checked_radios = document.querySelectorAll('input[type=radio]:checked').length;

			if (nbr_checked_radios>0) {
				button.disabled = false;
			} 
			else{
				button.disabled = true;
			}
		}

		if(this.state.size !== ''){
			return(
				<div>
					<ShoppingCart size={this.state.size} item={this.state.name} photo={this.state.image1}/>
				</div>
		)
		}

		return(
			<div className='always'>
				<Navbar3 name={this.state.name}/>
				<img className='itemMainPhoto' id='itemMPhoto' src={this.state.image1} />
				<p className='itemMainPrice'>${this.state.price}</p>
				<p className='itemMainDescription'>{this.state.description}</p>
					<div class="sizeSelect">
						
						<p>Size Select:</p>
						
						<ul className='sizeOptions'>
						  	<li>
							    <input type="radio" id="s-option" value='small' name="selector" onClick={check}/>
							    <label for="s-option">S</label>
							    
							    <div class="check"></div>
						  	</li>
						  
						  	<li>
							    <input type="radio" id="m-option" value='medium' name="selector" onClick={check}/>
							    <label for="m-option">M</label>
							    
							    <div class="check"><div class="inside"></div></div>
						  	</li>						  
						  	<li>
							    <input type="radio" id="l-option" value='large' name="selector" onClick={check}/>
							    <label for="l-option">L</label>
							    
							    <div class="check"><div class="inside"></div></div>
						  	</li>
						  	<li>
							    <input type="radio" id="xl-option" value='x-large' name="selector" onClick={check}/>
							    <label for="xl-option">XL</label>
							    
							    <div class="check"><div class="inside"></div></div>
						  	</li>
						</ul>
					</div>
				<p className='itemMainColor'>{this.state.color}</p>
				<Link href={`/shopping-cart`}>
					<button className='AddCart' id='button' value={this.state.name} onClick={() => this.addToCart()}>Add to Cart</button>
				</Link>
			</div>
		)
	}

	componentDidMount(){
		if (process.browser){
			document.getElementById("button").disabled = true;
		}
	}

	addToCart = function(){
		// localStorage.clear();
			let stuff;
	    	let itemSize;
	    	let itemName = document.getElementById('button').value;
	    	let itemImage = document.getElementsByTagName("img")[0].src;

	    	if (document.getElementById('s-option').checked) {
	  			itemSize = document.getElementById('s-option').value;
			}
			else if (document.getElementById('m-option').checked) {
	  			itemSize = document.getElementById('m-option').value;
			}
			else if (document.getElementById('l-option').checked) {
	  			itemSize = document.getElementById('l-option').value;
			}
			else if (document.getElementById('xl-option').checked) {
	  			itemSize = document.getElementById('xl-option').value;
			}
			this.setState({size:itemSize,name:itemName,image1:itemImage})

			var myData = localStorage.getItem('state');

			if(myData !== null && myData !== 'nothing'){
				let otherStuff = JSON.parse(myData)
				let newStuff = {size:itemSize, name:itemName, image1:itemImage}
				let newArray =[];

				if(otherStuff.length>1){
					for(var i=0;i<otherStuff.length;i++){
						newArray.push(otherStuff[i]);
					}
					newArray.push(newStuff);
					localStorage.setItem('state',JSON.stringify(newArray));
				}
				else{
					let array = [otherStuff, newStuff]
					let stuff = {...array}
					localStorage.setItem('state',JSON.stringify(array));
				}
			}
			else{
				let myData = localStorage.getItem('state');
				stuff = {size:itemSize,name:itemName,image1:itemImage}
				localStorage.setItem('state',JSON.stringify(stuff));
			}

	}

}

export default Items;