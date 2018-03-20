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
