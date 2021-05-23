import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Movies from './containers/Movies'
import AddMovie from './Components/AddMovie'

const App = () => {
  return (
    <div>
      <Header />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default App;