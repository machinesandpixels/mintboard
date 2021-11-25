import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes,
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
             <Route 
            path="/about"
            // component={ WhiteBoard }  
            element={ <AboutPage /> } 
            />
          </Routes>
      </Router>
  );
}

export default App;
