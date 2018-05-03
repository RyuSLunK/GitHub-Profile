import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class User extends Component {

    render() {
        return (
            <div style={{marginTop: '25px',}}>
                <Paper elevation={4}>
                    <div className="container-fluid">
                        
                        <div className="col-xs-1">
                            <img style={{width: '100%',}} src={this.props.avatarUrl} />
                        </div>
                        <div className="col-xs-11">
                            <Typography variant="headline" component="h2">
                                User Name: {this.props.userName}
                            </Typography>                        
                        </div>
                        <Typography component="p">
                            This is where the user information will go.
                        </Typography>
                        <Typography component="p">
                            
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    avatarUrl: state.user.avatarUrl,
    userName: state.user.userName
});
  
const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
        // increment,
        // incrementAsync,
        // decrement,
        // decrementAsync,
        // changePage: () => push('/about-us')
    },
    dispatch
);  

export default connect(mapStateToProps, mapDispatchToProps)(User);
