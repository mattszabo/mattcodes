import React from 'react'
import { Navbar, Content, Footer } from '../'

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    )
  }
}
