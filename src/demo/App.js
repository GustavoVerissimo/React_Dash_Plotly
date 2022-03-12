/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import TextInput from '../lib/components/TextInput.react'

class App extends Component {

    constructor() {
        super(props)

    this.state = {
        value: 'dash'
    };
  }

  setProps(newProps) {
    this.setState(newProps);
  }

    render() {
        return (
            <div>
                <TextInput 
                    label={'Dash'} 
                    value={this.state.value}
                    setProps={this.setProps}    
                />                
            </div>
        )
    }
}

export default App;
