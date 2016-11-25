import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../model/state/AppState';
import { LoginState } from '../../../model/state/LoginState';
import LoginAction from '../../../actions/LoginAction2';
import { InputMessageWrapper } from '../../../views/components/common/message/InputMessageWrapper';
import { Panel } from '../../../views/components/common/Panel';
import { Alert } from '../../../views/components/common/message/Alert';
import { Fade } from '../../../views/components/common/effect/Fade';
import LoginModal from '../../identity/LoginModal';

class Component extends React.Component<Props, void> {
    private dispatch;
    
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    public render() {
        

        return <LoginModal />
    }
}

interface Props {
    dispatch?
    state?: LoginState
}

// const mapStateToProps = (state: AppState): Props => {
//     return {
//         state: state.login
//     }
// }

const mapDispatchToProps = (dispatch): Props => {
    return { 
        dispatch: dispatch
    }
}

export const LoginPage = Component //connect(mapStateToProps, mapDispatchToProps)(Component);
