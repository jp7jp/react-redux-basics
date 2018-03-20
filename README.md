# React Redux Basics

A simple step-by-step tutorial to understand React Redux basic usage

### List Items Without Redux

##### Use create-react-app to scaffold an new React app

```bash
create-react-app react-redux-basics
cd react-redux-basics
yarn start
```

##### Remove code bloat and create a simple static list in the App component

```bash
subl ./src/App.js
```

```js
import React, { Component } from 'react';

class App extends Component {

  state = {
    vehicles: [
      {
        _id: 1,
        model: { name: 'Fiat Punto' }
      },
      {
        _id: 2,
        model: { name: 'Honda HR-V' }
      },
      {
        _id: 3,
        model: { name: 'Hyundai HB20' }
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>React Redux Basics</h1>
        <ul>
          {this.state.vehicles.map((vehicle) => (
            <li key={vehicle.model.name}>
              {vehicle.model.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
```

### Setup Redux with Reducers

##### Add Redux and React-Redux libraries

```bash
yarn add redux react-redux
yarn start
```

##### Use Provider component and create store

```bash
subl ./src/index.js
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
```

##### Create reducers

```bash
mkdir ./src/reducers
subl ./src/reducers/index.js
```

```js
import { combineReducers } from 'redux';
import combineReducers from './vehicles-reducer';

export default combineReducers({
  vehicles: vehiclesReducer
})
```

```bash
subl ./src/reducers/vehicles-reducer.js
```

```js
export default () => {
  return {
    vehicles: [
      {
        _id: 1,
        model: { name: 'Fiat Punto' }
      },
      {
        _id: 2,
        model: { name: 'Honda HR-V' }
      },
      {
        _id: 3,
        model: { name: 'Hyundai HB20' }
      }
    ]
  }
}
```

### Connect App component to Redux

```bash
subl ./src/App.js
```

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  /*
  state = {
    vehicles: [
      {
        _id: 1,
        model: { name: 'Fiat Punto' }
      },
      {
        _id: 2,
        model: { name: 'Honda HR-V' }
      },
      {
        _id: 3,
        model: { name: 'Hyundai HB20' }
      }
    ]
  }
  */

  render() {
    return (
      <div>
        <h1>React Redux Basics</h1>
        <ul>
          {this.props.vehicles.map((vehicle) => (
            <li key={vehicle.model.name}>
              {vehicle.model.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles.all
  }
}

export default connect(mapStateToProps)(App);
```
