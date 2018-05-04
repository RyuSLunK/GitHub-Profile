import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRepoList, getRepoInformation } from '../../modules/repos';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Icon from 'material-ui/Icon';
import Badge from 'material-ui/Badge';
const styles = {
    card: {
    //   minWidth: 275,
      width: '50%',
    },
    cardContainer: {
        display: 'flex',
        flex: '1',
        flexWrap: 'wrap',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

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
            <div>
                <h2>Repositories</h2>
            <div style={{...styles.cardContainer, marginTop: '25px',}}>
              {this.props.repos.length > 0 ? this.renderRepositories() : null}
            </div>
            </div>
        );
    }

     renderRepositories = props => {
        return this.props.repos.map(repo=>{
            return (
                 <Card style={styles.card} key={repo.id}>
                     <CardContent>
                         <h3>
                            {repo.name}{repo.language ? ` – ${repo.language}` : ''}
                         </h3>
                         <p>{repo.description}</p>
                         <div className="col-xs-6">
                            <Icon>watch_later</Icon>{repo.watchers_count} watchers
                         </div>
                         <div className="col-xs-6">
                            <Icon>call_split</Icon>{repo.forks_count} forks
                         </div>
                         <div className="col-xs-12">
                            <Button fullWidth={true} variant="raised" size="small" color="primary" onClick={()=>this.props.getRepoInformation(repo)}>Learn More</Button>
                         </div>
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
        getRepoInformation,
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
