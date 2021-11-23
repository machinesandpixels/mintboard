import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import WhiteBoard from '../pages/WhiteBoard';

const App = () => {
  return (
    // <div>
     <Router>
          <Header />
          <Routes>
          <Route
            exact
            path='/'
            // component={ HomePage }
            element={ <HomePage /> }
          />
          <Route 
            path="/whiteboard"
            // component={ WhiteBoard }  
            element={ <WhiteBoard /> } 
            />
          </Routes>
      </Router>
  // </div>
  );
}

export default App;
