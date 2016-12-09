import * as React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { AppState } from '../../model/state/AppState';
import FeedbackState from '../../model/state/FeedbackState';

//https://github.com/callemall/material-ui/issues/2811#issuecomment-169441872
const feedback = (props: Props) => {
    return (
        <Snackbar
            open={ !!props.state.errMsg }
            message={props.state.errMsg || ''}
            autoHideDuration={ 10000 }

            contentStyle={ 
                {
                    color: 'red'
                } 
            }
            bodyStyle={
                {
                    flexGrow: 0,
                    width: '85%',
                    backgroundColor: 'black'
                }
            } 
            style={
                {
                    width: '100%'
                }
            }/>
    );
}

interface Props {
    state: FeedbackState
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.feedback
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(feedback);