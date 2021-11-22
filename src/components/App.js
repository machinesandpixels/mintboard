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
    <div>
     <Router>
          <Header />
          <Routes>
          <Route
            exact
            path='/'
            element={ <HomePage /> }
          />
          <Route path="/whiteboard"  element={ <WhiteBoard /> } />
          </Routes>
      </Router>
  </div>
  );
}

export default App;
