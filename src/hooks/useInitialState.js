import { useState, useEffect } from 'react';



const initialState = (API) => {
    	// MAneja el estado de la aplicación
	const [videos, setVideos] = useState({ mylist: [], trends: [], originals: []});
	// Maneja los efectos sobre el estado
	useEffect(() => {
		fetch(API)
			.then(response => response.json())
			.then(data => setVideos(data));
    }, [])
    return videos;
}

export default initialState;