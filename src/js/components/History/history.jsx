import React, { Component } from 'react';

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>Search History</div>
          <div className='card-body'>
            <ul>
              {
                history.map(search => {
                  <li className='d-flex'>
                    <p className='flex-left'>{search.city}</p>
                    <div className='flex-right ml-auto'>
                      <p className='mb-0'>{search.date}</p>
                      <p className='mb-1'>{search.time}</p>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
