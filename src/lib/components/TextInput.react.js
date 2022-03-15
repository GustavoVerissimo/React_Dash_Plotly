import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  // here we'll define everything we need our TextInput component to have
  constructor(props){
      super(props);
      this.state = {
          value: 'default'
      }
  }

  handleInputChange = (e) => {
    // get the value from the DOM node
    const newValue = e.target.value;
    // update the state!
    this.setState({
      value: newValue
    })
  }

  render() {
    
    let value;
    if (this.props.setProps) {
      value = this.props.value;
    } else {
      value = this.state.value;
    }

    return (
      <div id={id}>
          <label>{this.props.label}</label>
          <input value={value} onChange={this.handleInputChange}/>
          <p>{value}</p>
      </div>
    )
  }
}


TextInput.defaultProps={};

TextInput.propTypes={

  id: PropTypes.string,

  label: PropTypes.string,

  p: PropTypes.string,

  value: PropTypes.string,
}