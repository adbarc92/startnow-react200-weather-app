import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='row btn-group'>
          <button>San Diego</button>
          <button>NewYork</button>
          <button>Washington D.c.</button>
          <button>London</button>
          <button>Tokyo</button>
        </div>
        <div className='row'>
          <input></input>
          <button></button>
        </div>
      </div>
    )
  }
}
