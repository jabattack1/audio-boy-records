import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Head from 'next/head';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/style.css';

class News extends React.Component{
	render(){
 

		const {news, i} = this.props.news;

		return(
			<a className="pn-ProductNav_Link" aria-selected="true">
				<figure className='grid-figureNews'>
					<div className='grid-figure-wrapNews'>
						<div alt={this.props.news.code} className='grid-news'>
							<img className='newsImage' src={this.props.news.display_src} />
							<div className='newsDate'>{this.props.news.date}</div>
							<div id='newsHeadlineWrapper'>
							<div className='newsHeadline'>{this.props.news.headline}</div>
							</div>
							<div className='newsContent'>{this.props.news.content}</div>
						</div>
					</div>
				</figure>
			</a>
		)
	}
}

export default News;

 

 
