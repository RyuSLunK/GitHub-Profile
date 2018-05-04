import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepoList, getRepoInformation } from '../../modules/repos';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';


class Repository extends Component {
    // constructor(){
    //     super();
    //     //do stuff
    // }
    componentDidMount(){
        // this.props.getRepoList();
        if(this.props.commits.length === 0){
          // console.log(this.props.location.match.params.repoName);
          // getRepoInformation()
        }
    }
    render() {
        return (
            <div style={{marginTop: '25px',}}>
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
