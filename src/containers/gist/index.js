import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepoList, getRepoInformation } from '../../modules/repos';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';


class Gist extends Component {
    render() {
        return (
            <div style={{marginTop: '25px',}}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    <Link to="/">Go Back</Link>
                  </Typography>
                </Toolbar>
              </AppBar>
              <Typography variant="title">Gist</Typography>
              <code>{this.props.gist.files[Object.keys(this.props.gist.files)[0]].content}</code>
              {/* <p>{JSON.stringify(this.props.gist)}</p> */}
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    gist: state.gists.gist,
    loading: state.gists.loading,
});
  
export default connect(mapStateToProps)(Gist);
