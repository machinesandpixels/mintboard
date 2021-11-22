import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import WhiteBoard from '../pages/WhiteBoard';
// import DrawingContainer from './components/DrawingContainer';

const App = () => {
  return (
    // <div className="">
    //    <h1>Minted Images</h1>
    //   <div className="drawing-area">
    //     <DrawingContainer />
    //   </div>
    // </div>
    <div>
     <Router>
          <Header />
          <Routes>
          <Route
            exact
            path='/'
            element={ <HomePage /> }
          />
          <Route path="/images"  element={ <WhiteBoard /> } />
          </Routes>
      </Router>
  </div>
  );
}

export default App;
