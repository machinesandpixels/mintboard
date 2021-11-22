import React from 'react';
import DrawingContainer from '../components/DrawingContainer';

const WhiteBoard = () => {
    return (
    <div className="">
       <h1>Mintboard</h1>
      <div className="drawing-area">
        <DrawingContainer />
      </div>
    </div>
    )
}

export default WhiteBoard;
