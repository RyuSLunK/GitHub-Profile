import React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
const Gist = () => (
  <div>
        <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Gist
      </Typography>
    </Toolbar>
  </AppBar>
    <h1>Unique Gist Page</h1>
    <p>Did you get here via Redux?</p>
  </div>
);

export default Gist;
