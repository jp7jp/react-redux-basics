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
            <li key={vehicle._id}>
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
    all: [
      {
        _id: 1,
        model: { name: 'Fiat Punto from Reducer' }
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

  render() {
    return (
      <div>
        <h1>React Redux Basics</h1>
        <ul>
          {this.props.vehicles.map((vehicle) => (
            <li key={vehicle._id}>
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

### Retrieve data from Action

##### Create action and move static data from reducer to action

```bash
mkdir ./src/actions
subl ./src/actions/index.js
```

```js
const vehicles = {
  all: [
    {
      _id: 1,
      model: { name: 'Fiat Punto from Action' }
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

export const getAllVehicles = () => {
  return {
    type: 'GET_ALL_VEHICLES',
    payload: vehicles.all
  }
}
```

##### Prepare reducer to receive action

```bash
subl ./src/reducers/vehicles-reducer.js
```

```js
const INITIAL_STATE = {
  all: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_ALL_VEHICLES':
      return {
        ...state,
        all: action.payload
      }
    default:
      return state;
  }
}
```

##### Call action from the App component

```bash
subl ./src/App.js
```

```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllVehicles } from './actions';

class App extends Component {

  componentWillMount() {
    this.props.getAllVehicles();
  }

  render() {
    return (
      <div>
        <h1>React Redux Basics</h1>
        <ul>
          {this.props.vehicles.map((vehicle) => (
            <li key={vehicle._id}>
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

export default connect(mapStateToProps, { getAllVehicles })(App);
```

### Retrieve data from API

##### Add Axios and Redux-Thunk

```bash
yarn add axios redux-thunk
yarn start
```

##### Prepare component to handle async requests

```bash
subl ./src/App.js
```

```js
...

class App extends Component {

  ...

  render() {

    if (!this.props.vehicles.length) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <h1>React Redux Basics</h1>
        <ul>
          {this.props.vehicles.map((vehicle) => (
            <li key={vehicle._id}>
              {vehicle.model.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

...
```

##### Create API request inside the action (and remove static vehicles list)

```bash
subl ./src/actions/index.js
```

```js
import axios from 'axios';

export const getAllVehicles = () => {
  return (dispatch) {
    axios.get('https://api-cdn.gruposinal.com.br/public/cars/search?brand=grupo-sinal&paginate=eyJvZmZzZXQiOjB9')
      .then((response) => {
        dispatch({
          type: 'GET_ALL_VEHICLES',
          payload: response.data.cars          
        })
      })
  }
}
```

##### Apply Redux-Thunk Middleware

```bash
subl ./src/index.js
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
```
