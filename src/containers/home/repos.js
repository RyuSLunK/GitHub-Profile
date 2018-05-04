import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepoList, getRepoInformation } from '../../modules/repos';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

const styles = {
    cardContainer: {
        flexWrap: 'wrap',
        display: 'flex',
    },
    card: {
        width: '32%', 
        margin: '5px',
    }
}

class Repos extends Component {
    componentDidMount(){
        if(this.props.repos.length > 0){
            console.log('just saved a network call!');
        } else {
            this.props.getRepoList();
        }        
    }

    render() {
        return (
            <div style={{...styles.cardContainer, marginTop: '25px',}}>
              {this.props.repos.length > 0 ? this.renderRepositories() : null}
            </div>
        );
    }

     renderRepositories = props => {
        return this.props.repos.map(repo=>{
            return (
                 <Card style={styles.card} key={repo.id}>
                     <CardContent>
                         <Typography>
                             RepoName: {repo.name}, 
                             RepoDescription: {repo.description},
                             RepoLanguage: {repo.language},
                             RepoWatchers: {repo.watchers_count},
                             RepoForks: {repo.forks_count}
                         </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size="small" onClick={()=>this.props.getRepoInformation(repo)}>Learn More</Button>
                    </CardActions>
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
        getRepoInformation,
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
