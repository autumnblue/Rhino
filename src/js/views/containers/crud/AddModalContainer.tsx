import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import { CrupdateState} from '../../../model/state/CrupdateState';
import { AppState } from '../../../model/state/AppState';
import { AddActionCreator } from '../../../actions/crud/AddActionCreator'
import { Service } from '../../../service/Service';

export abstract class AddModalContainer extends React.Component<Props, void> { 
    public abstract getActionCreator(): AddActionCreator<Service>;
    public abstract jsx(): React.ReactElement<any>;

    public render() {
        const input = this.props.state.input;

        return (
            <Modal 
                title={ 'New phishing domain' }
                visible={ this.props.state.visible}>
                    <Control>
                        <button onClick={this.onCancel}>
                            <span className="glyphicon glyphicon-share-alt"></span>
                            CANCEL
                        </button>
                    </Control>
                    <Control>
                        <button onClick={this.onSubmit}>SAVE</button>
                    </Control>

                    { this.jsx() }
            </Modal>
        );
    }

    private onSubmit = ():void => {
        this.getActionCreator()
            .submit(this.props.dispatch, this.props.state)
    }

    private onCancel = (): void => {
        this.getActionCreator()
            .cancel(this.props.dispatch);
    }
}

interface Props {
    dispatch?
    state?: CrupdateState
}

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const connect = (
    mapStateToProps: (state: AppState) => Props, 
    containerCls: React.ComponentClass<Props>) => {
        return react_redux.connect(mapStateToProps, mapDispatchToProps)(containerCls)
}
