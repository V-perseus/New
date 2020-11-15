import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>(
          <Route key={index} path={route.path} exact render={(props)=> <route.component {...props}/>}></Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App
