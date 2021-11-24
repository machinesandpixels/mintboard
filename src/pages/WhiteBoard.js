import React from 'react';
import Logo from '../components/Logo';
import DrawingContainer from '../components/DrawingContainer';

const WhiteBoard = () => {
    return (
    <div className="">
        <div className="logo--container">
            <Logo />
        </div>
      <div className="whiteboardd">
      {/* <div className="drawing-area"> */}
        {/* <DrawingContainer style={{ width: '5rem' }} /> */}
      {/* </div> */}
      <DrawingContainer />
      </div>
    </div>
    )
}

export default WhiteBoard;
