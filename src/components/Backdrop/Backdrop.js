import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ['backdrop', props.show ? 'backdropOpen' : "backdropClosed"];

    return (
        <div className={cssClasses.join(' ')}></div>
    )
};

export default backdrop;