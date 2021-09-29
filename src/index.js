import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './pages/home/Home'
import Project from './pages/project/Project'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projects/:projectId" component={ Project } />


        </Switch>
    </Router>  
    </React.StrictMode>,
  document.getElementById('root')
);

