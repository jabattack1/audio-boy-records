import React from 'react';
import Head from 'next/head';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import styled from 'styled-components';

import ArtistsGrid from './artists-grid.js';
import NewsGrid from './news-grid.js';
import AboutLabel from './about-label.js';
import StoreGrid from './store-grid.js';
import Contact from './contact.js';

import '../css/normalize.css';
import '../css/skeleton.css';



class Parent extends React.Component {

	constructor(props){

		super(props)

	}



	render () {
    	return(
    		<div>
	    		<div className="container">
				    <div className="row">
				      	<div className="one-half column">
				        	<div className='bannerWrapper'>
				          		<div className="image123">
				            		<div className="imgContainer">
				            			<img className='frontLogo' />
				            		</div>
				            		<div className="tech-slideshow">
				            			<div className="mover-1"></div>
				                		<div className="mover-2"></div>
				            		</div>   
				          		</div>
				        	</div>
				        	<div className='titleWrapper'>
				        	    <Element name="artists" className="element">Artists</Element>
	    					</div>
				        	<div>
				        		<ArtistsGrid {...this.props}/>
				        	</div>
				        	<div className='titleWrapper'>
	    						<Element name="news" className="element">News</Element>
	    					</div>
	    					<div>
				        		<NewsGrid {...this.props}/>
				        	</div>
				        	<div className='newsLabelSpacer'>
				        	</div>
				        	<div className='titleWrapper'>
	    						<Element id='labelHeader' name="label" className="element">The Label</Element>
	    					</div>
	    					<div>
				        		<AboutLabel/>
				        	</div>
				        	<div className='titleWrapper'>
	    						<Element id='storeHeader' name="store" className="element">Store</Element>
	    					</div>
	    					<div>
				        		<StoreGrid {...this.props}/>
				        	</div>
				        	<div className='newsLabelSpacer'>
				        	</div>
				        	<div className='titleWrapper'>
	    						<Element id='contactHeader' name="contact" className="element">Contact</Element>
	    					</div>
	    					<div>
				        		<Contact/>
				        	</div>
				      	</div>
				    </div>
				</div>
			</div>
    	)
 	 }

}

export default Parent;