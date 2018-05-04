import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Repository from '../repository';
import Gist from '../gist';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/:repoName/commits" component={Repository} />
      <Route path="/gist/:gistId" component={Gist} />
    </main>
  </div>
);

export default App;
