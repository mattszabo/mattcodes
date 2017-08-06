import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import One from '../One/One'
import Two from '../Two/Two'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/one' component={One}/>
          <Route path='/two' component={Two}/>
        </Switch>
      </main>
    )
  }
}

export default Main
