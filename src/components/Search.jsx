import React from 'react';
import '../assets/styles/components/search.scss'

const Search = () => (
	<main class="main">
		<h2 class="main__title" for="search">¿Qué quieres ver hoy?</h2>
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