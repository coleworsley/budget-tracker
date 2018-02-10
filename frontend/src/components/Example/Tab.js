import React, { Component } from 'react';
import LineItem from './LineItem.js';


const initialState = {
  header: 'Income',
  fields: [],
}

export default class extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  renderList() {
    const fields = ['Income', 'Other']

    return fields.map(e => <LineItem name={e}/>)
  }

  render() {
    const { header, fields } = this.state;

    return (
      <div>
        <h2>{header}</h2>
        {this.renderList()}
      </div>
    )
  }
}
