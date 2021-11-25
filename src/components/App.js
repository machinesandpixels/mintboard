import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Header from '../layout/Header';
import HomePage from '../pages/HomePage';
import WhiteBoard from '../pages/WhiteBoard';
import AboutPage from '../pages/AboutPage';

const App = () => {
  return (
     <Router>
          <Header />
          <Route
            exact
            path='/'
            component={ HomePage }
          />
          <Route 
            path="/whiteboard"
            component={ WhiteBoard }  
            />
             <Route 
            path="/about"
            component={ AboutPage }   
            />
      </Router>
  );
}

export default App;
