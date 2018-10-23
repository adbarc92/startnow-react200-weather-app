import React, { Component } from 'react';

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>Search History</div>
          <div className='card-body'>
            <ul>
              <li className='d-flex'>
                <p className='flex-left'>San Diego</p>
                <div className='flex-right ml-auto'>
                  <p className='mb-0'>04/28/2016</p>
                  <p className='mb-1'>19:04:48</p>
                </div>
              </li>
              <li className='d-flex'>
                <p className='flex-left'>New York</p>
                <div className='flex-right ml-auto'>
                  <p className='mb-0'>04/28/2016</p>
                  <p className='mb-1'>19:04:48</p>
                </div>
              </li>
              <li className='d-flex'>
                <p className='flex-left'>Washington D.C.</p>
                <div className='flex-right ml-auto'>
                  <p className='mb-0'>04/28/2016</p>
                  <p className='mb-1'>19:04:48</p>
                </div>
              </li>
              <li className='d-flex'>
                <p className='flex-left'>London</p>
                <div className='flex-right ml-auto'>
                  <p className='mb-0'>04/28/2016</p>
                  <p className='mb-1'>19:04:48</p>
                </div>
              </li>
              <li className='d-flex'>
                <p className='flex-left'>Tokyo</p>
                <div className='flex-right ml-auto'>
                  <p className='mb-0'>04/28/2016</p>
                  <p className='mb-1'>19:04:48</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
