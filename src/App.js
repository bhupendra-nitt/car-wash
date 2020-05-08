import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer as carWashReducer } from './car_wash/reducer';
import './App.css';
import CarWash from './car_wash/CarWash';
const carWashStore = createStore(carWashReducer)

function App() {
  return (
    <div className="App">
      <Provider store={carWashStore}>
        <CarWash />
      </Provider>
    </div>
  );
}

export default App;
