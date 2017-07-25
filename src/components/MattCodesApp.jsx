import React from 'react'
import Header from './Header'

class MattCodesApp extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: '#333333'
    }
    return (
      <div style={divStyle}>
        <Header />
      </div>
    )
  }
}

export default MattCodesApp
