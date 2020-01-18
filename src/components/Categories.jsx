import React from 'react';
import '../assets/styles/components/Categories.scss';

const categories = ({ children, title }) => (
    <div>
        <h3 className='Categories__title'>{title}</h3>
        {children}
    </div>
);

export default categories;