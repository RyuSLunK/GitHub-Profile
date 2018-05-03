import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepoList } from '../../modules/repos';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class Repos extends Component {
    // constructor(){
    //     super();
    //     //do stuff
    // }
    componentDidMount(){
        this.props.getRepoList();
    }
    render() {
        return (
            <div style={{marginTop: '25px',}}>
              {this.renderRepositories()}
            </div>
        );
    }

     renderRepositories = props => {
        return this.props.repos.map(repo=>{
            return (
                 <Card key={repo.id}>
                     <CardContent>
                         <Typography>
                             RepoName: {repo.name}, 
                             RepoDescription: {repo.description},
                             RepoLanguage: {repo.language},
                             RepoWatchers: {repo.watchers_count},
                             RepoForks: {repo.forks_count}
                         </Typography>
                     </CardContent>
                 </Card>
            );
        })
    }    
} 

const mapStateToProps = state => ({
    repos: state.repos.list,
});
  
const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
        getRepoList,
        // increment,
        // incrementAsync,
        // decrement,
        // decrementAsync,
        // changePage: () => push('/about-us')
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
