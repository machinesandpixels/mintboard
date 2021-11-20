import React from 'react';
import DrawingContainer from './components/DrawingContainer';

const App = () => {
  return (
    <div className="">
       <h1>Minted Images</h1>
      <div className="drawing-area">
        <DrawingContainer />
      </div>
    </div>
  );
}

export default App;
