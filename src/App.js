import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Shelf from './Shelf/Shelf';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Shelf />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
