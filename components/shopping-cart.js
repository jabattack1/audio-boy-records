import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

import Cart from './cart.js'

import Navbar3 from './navbar3.js';

import '../css/artist.css';
import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/shoppingCart.css';

class ShoppingCart extends React.Component{

	
	constructor(){

	    super()

	    if (typeof localStorage === "undefined") {
		  	this.state = {
				data:''
			}
		}
	    else if(localStorage.getItem('state')!== null && localStorage.getItem('state') !== 'nothing'){
	    	var data = localStorage.getItem('state');
		    let parsedData = JSON.parse(data);

			this.state = {
				data:parsedData
			}		
		}
		else{
			this.state = {
				data:''
			}
		}
	}

	state={

	}

	render(){
		if(this.state.data === ''){
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<ul>
						<Cart />)}		
					</ul>
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
				</div>
			)
		}

		else if(this.state.data.length == undefined){
			console.log('loca');
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<ul>
						<Cart key='1' i='1' data={this.state.data}/>)}		
					</ul>
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
				</div>
			)
		}
		else{
			console.log('Titacion');
			return(
				<div className='shoppingCartArea'>
					<Navbar3 name='Shopping Cart' />
					<ul>
					{this.state.data.map((data, i) => <Cart {...this.parsedData} key={i} i={i} data={data} />)}		
					</ul>
					<Link href={`/shopping-cart`}><p className='goToCartFromCart' onClick={this.clear}>Delete All Items</p></Link>
				</div>
			)
		}
	}

	clear(){
		console.log('famicon');
		localStorage.clear();
		location.reload();
		localStorage.setItem('state','nothing');
		console.log(localStorage.getItem('state'));
	}
	 
	componentDidMount(){


	}

	componentWillUnmount() {


  	}

}

export default ShoppingCart;

