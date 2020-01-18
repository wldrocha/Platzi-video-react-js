import React from 'react';
import '../assets/styles/components/search.scss'

const Search = () => (
	<main className="main">
		<h2 className="main__title" htmlFor="search">¿Qué quieres ver hoy?</h2>
		<input
			className="input"
			type="text"
			name="search"
			id="search"
			placeholder="Buscar..."
		/>
	</main>
);
export default Search;