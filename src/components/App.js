import React from 'react'
import { Switch, Route } from 'react-router-dom'

const App = () => {
 
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <div>hi</div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
