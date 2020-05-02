import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Draggable from '../hooks/draggable'
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Draggable>
            <div className='square border text-center'>drag me</div>
          </Draggable>
        </Route>
      </Switch>
    </div>
  )
}

export default App
