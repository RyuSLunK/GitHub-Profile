import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter';
import User from '../home/user';
import Repos from '../home/repos';
import Gists from '../home/gists';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Home = props => (
<div>
  <User />
  <Repos />
  <Gists />
</div>

  // <div>
  //   <h1>Home</h1>
  //   <p>Count: {props.count}</p>

  //   <p>
  //     <button onClick={props.increment} disabled={props.isIncrementing}>
  //       Increment
  //     </button>
  //     <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
  //       Increment Async
  //     </button>
  //   </p>

  //   <p>
  //     <button onClick={props.decrement} disabled={props.isDecrementing}>
  //       Decrement
  //     </button>
  //     <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
  //       Decrement Async
  //     </button>
  //   </p>

  //   <p>
  //     <button onClick={() => props.changePage()}>
  //       Go to about page via redux
  //     </button>
  //   </p>
  // </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
