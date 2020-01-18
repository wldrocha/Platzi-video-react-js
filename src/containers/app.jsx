import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {

	// MAneja el estado de la aplicación
	const [videos, setVideos] = useState([]);
	// Maneja los efectos sobre el estado
	useEffect(() => {
		fetch('http://localhost:3000/initialState')
			.then(response => response.json)
			.then(data => setVideos(data));
	}, [])
	return (
		<div className="App">
			<Header />
			<Search />

			<Categories title="Mi lista">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>
			<Categories title="Tendencias">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>
			<Categories title="es titulo 3">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>

			<Footer />
		</div>
	)
};

export default App;
