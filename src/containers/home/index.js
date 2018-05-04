import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../home/user';
import Repos from '../home/repos';
import Gists from '../home/gists';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Home = props => (
  <div className="container-fluid">
      <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Home
      </Typography>
    </Toolbar>
  </AppBar>
    <User />
    <div className="col-md-8">
      <Repos />
    </div>
    <div className="col-md-4"><Gists /></div>
    
  </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
