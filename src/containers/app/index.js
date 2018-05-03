import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Repository from '../repository';
import Gist from '../gist';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
const App = () => (
  <div>
    {/* <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header> */}
    <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Home
      </Typography>
    </Toolbar>
  </AppBar>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/:repoName/commits" component={Repository} />
      <Route path="/gists/:gistId" component={Gist} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;