import React from 'react'

class Header extends React.Component {
  render() {
    const headerStyle = {
      color: "#FFFFFF",
      borderBottom: "1px solid #FFFFFF"
    }
    return (
      <h1 style={headerStyle}>
        mattcodes.
      </h1>
    )
  }
}

export default Header
