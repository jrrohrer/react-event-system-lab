// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  handlePasswordInput = () => {
    console.log("Entering password...")
  }

  render() {
    return(
      <input type="password" onKeyUp={this.handlePasswordInput} />
    )
  } 
}

export default Keypad