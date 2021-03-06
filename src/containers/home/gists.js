import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGistList, getGistInformation } from '../../modules/gists';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class Gists extends Component {

    componentDidMount(){
        if(this.props.gists.length > 0){
            console.log('saved a network call!!!');
        } else {
            this.props.getGistList();
        }
    }
    render() {
        return (
            <div>
                <h2>Gists</h2>
            <div style={{marginTop: '25px',}}>
              {this.props.gists.length > 0 ? this.renderGists() : null}
            </div>
            </div>
        );
    }

     renderGists = props => {
        return this.props.gists.map(gist=>{
            return (
                 <Card key={gist.id} id={gist.id}>
                     <CardContent>
                         <h3>{gist.files[Object.keys(gist.files)[0]].filename}</h3>
                         <p>{gist.description}</p>  
                           <a href={gist.url}>See on GitHub</a>      
                     </CardContent>
                    <CardActions>
                    <Button size="small" onClick={()=>this.props.getGistInformation(gist)}>Learn More</Button>
                    </CardActions>
                 </Card>
            );
        })
    }    
} 

const mapStateToProps = state => ({
    gists: state.gists.list,
});
  
const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
        getGistList,
        getGistInformation,
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(Gists);
