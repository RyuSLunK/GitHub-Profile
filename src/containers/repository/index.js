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


class Repository extends Component {

    componentDidMount(){
        if(this.props.commits.length === 0){

        }
    }

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
              <Typography variant="title">Commits</Typography>
              {this.renderCommits()}
            </div>
        );
    }

     renderCommits = () => {
        return this.props.commits.map(commit=>{
            return (
              // display commit sha, commit message and author name
                 <Card key={commit.sha}>
                     <CardContent>
                      <Typography>                             
                        sha: {commit.sha},
                        message: {commit.commit.message},
                        name: {commit.commit.author.name},
                      </Typography>
                     </CardContent>
                     <CardActions>
                      <Button size="small" onClick={()=>this.props.getRepoInformation(commit)}>Learn More</Button>
                    </CardActions>
                 </Card>
            );
        })
    }    
} 

const mapStateToProps = state => ({
    commits: state.repos.commits,
    loading: state.repos.loading,
});
  
const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
        getRepoList,
        getRepoInformation,
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
