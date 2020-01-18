import React from 'react';
import '../assets/styles/components/Categories.scss';

const categories = ({ children }) => (
    <div>
        <h3 className='Categories__title'>Mi Lista</h3>
        {children}
    </div>
);

export default categories;