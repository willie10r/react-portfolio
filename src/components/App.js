import React from 'react';
import { ReactDOM } from 'react-dom';
import {
  Route,
  Router,
  Routes
} from 'react-router-dom';
import '../scss/styles.scss';


//components
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import SocialFlow from './SocialFlow';
const App = () => {
  return (
    <div className="App" >

      <div>
        <Navigation></Navigation>
        {/* the switch for the page redering has been replaced by <routes> in the new react update */}
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/Projects' element={<Projects></Projects>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
        </Routes>
        <SocialFlow></SocialFlow>
      </div>
    </div>
  );
}

export default App;
