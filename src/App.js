import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllVehicles } from './actions';

class App extends Component {

  componentWillMount() {
    this.props.getAllVehicles();
  }

  render() {
    console.log(this.props.vehicles);
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

export default connect(mapStateToProps, { getAllVehicles })(App);
