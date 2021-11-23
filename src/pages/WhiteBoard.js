import React from 'react';
import Logo from '../components/Logo';
import DrawingContainer from '../components/DrawingContainer';

const WhiteBoard = () => {
    return (
    <div className="">
        <div className="logo--container">
            <Logo />
        </div>
      <div className="whiteboard">
      {/* <div className="drawing-area"> */}
        {/* <DrawingContainer style={{ width: '5rem' }} /> */}
      {/* </div> */}
      </div>
    </div>
    )
}

export default WhiteBoard;
