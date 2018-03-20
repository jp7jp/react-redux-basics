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
