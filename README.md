# React Redux Basics

A simple step-by-step tutorial to understand React Redux basic usage

### List Items Without Redux

##### Use create-react-app to scaffold an new React app

```bash
create-react-app react-redux-basics
cd react-redux-basics
yarn start
```

##### Remove code bloat and add a simple static list in the App component

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
