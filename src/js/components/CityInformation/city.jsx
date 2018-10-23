import React, { Component } from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>City Information</div>
          <div className='card-body'>
            <div className='h5'>Tokyo</div>
            <p>Lat/Long:35.68, 139.759</p>
            <hr />
            <div className='row'>
              <div className='col-4'>
                <h6> Temperature (F)</h6>
                <p>65.62F</p>
              </div>
              <div className='col-4'>
                <h6> Pressure </h6>
                <p>997</p>
              </div>
              <div className='col-4'>
                <h6> Humidity </h6>
                <p>39%</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <h6> Lowest Temp (F) </h6>
                <p>62.01F</p>
              </div>
              <div className='col-4'>
                <h6> Highest Temp (F) </h6>
                <p>71.01F</p>
              </div>
              <div className='col-4'>
                <h6> Wind Speed </h6>
                <p>24.16mph</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
