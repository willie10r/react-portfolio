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

const App= () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
