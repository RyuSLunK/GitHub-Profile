import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGistList } from '../../modules/gists';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';

class Gists extends Component {
    // constructor(){
    //     super();
    //     //do stuff
    // }
    componentDidMount(){
        this.props.getGistList();
    }
    render() {
        return (
            <div style={{marginTop: '25px',}}>
              {this.renderGists()}
            </div>
        );
    }

     renderGists = props => {
        return this.props.gists.map(gist=>{
            return (
                 <Card key={gist.id} id={gist.id}>
                     <CardContent>
                         <Typography>
                           <Link to={'/gists/' + gist.id}>GistName: {gist.url}</Link>
                           GistDescription: {gist.description}
                         </Typography>
                     </CardContent>
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
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(Gists);
