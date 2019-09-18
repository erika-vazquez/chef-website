import React from 'react';
import NavBar from './components/nav'
import HomeSec from './components/homeSection'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <header>
    <NavBar />
      </header>
      <HomeSec />
      <Footer />
    </div>
  );
}

export default App;
