import React from 'react'
import Header from './Header'

class MattCodesApp extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "hotpink";
  }

  render() {
    const divStyle = {}
    return (
      <div style={divStyle}>
        <Header />
      </div>
    )
  }
}

export default MattCodesApp
