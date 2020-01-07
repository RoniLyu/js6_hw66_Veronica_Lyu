import React from 'react';
import './Spiner.css'

const Spinner = ({show}) => {
    if (show) {
        return <div className="Spinner">Loading...</div>
    }

    return null;
};

export default Spinner;