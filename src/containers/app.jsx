import React from 'react';
import '../assets/styles/app.scss'
import Search from '../components/Search'
import Header from '../components/Header'
const App = ()=>(
    <div className="App">
       <Header/>
       <Search/>
    </div>
);

export default App