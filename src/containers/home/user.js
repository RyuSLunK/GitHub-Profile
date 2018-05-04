import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = {
    avatar: {
        borderRadius: '100%',
        width: 75,
        height: 75,
        border: '5px solid white',
        boxShadow: '2px 2px 2px 2px black',
    }
}

class User extends Component {

    render() {
        return (
            <div style={{marginTop: '25px',}}>
                <Paper elevation={4}>
                    <div className="container-fluid">
                        
                        <div className="col-xs-2">
                            <img alt="" style={styles.avatar} src={this.props.avatarUrl} />
                        </div>
                        <div className="col-xs-10">
                            <Typography variant="headline" component="h2">
                                User Name: {this.props.userName}
                            </Typography>                        
                        </div>
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

export default connect(mapStateToProps)(User);