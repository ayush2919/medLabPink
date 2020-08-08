import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './component/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './component/redux/configureStore';
import './Animation.css'
import './App.css';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}> 
    <BrowserRouter>
    <div>
      <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
