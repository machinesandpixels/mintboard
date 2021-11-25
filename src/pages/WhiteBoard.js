import React from 'react';
import Logo from '../components/Logo';
import DrawingContainer from '../components/DrawingContainer';

const WhiteBoard = () => {
    return (
    <div>
        <div className="d-flex justify-content-center">
            <Logo />
        </div>
        <DrawingContainer />
    </div>
    )
}

export default WhiteBoard;
