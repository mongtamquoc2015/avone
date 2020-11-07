import React from 'react';
import Slider from './Slider';
import Jumbotron from './Jumbotron';
import Header from '../../components/Header';

const HomeUI = ({ sliders }) => {
	return (
		<>
			<Header />
			<Slider sliders={sliders} />
			<Jumbotron />
		</>
	)
}

export default HomeUI;