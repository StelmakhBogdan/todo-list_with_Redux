import React from 'react';

import './link.css';

const Link = ({ active, children, onClick }) => (
    <button
        className="btn"
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
);

export default Link;

