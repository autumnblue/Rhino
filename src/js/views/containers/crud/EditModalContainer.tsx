import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import { CrupdateState} from '../../../model/state/CrupdateState';
import { AppState } from '../../../model/state/AppState';
import { EditActionCreator } from '../../../actions/crud/EditActionCreator'
import { Service } from '../../../service/Service';
import { ConfirmableButton } from '../../components/common/ConfirmableButton';

export abstract class EditModalContainer extends React.Component<Props, void> { 
    public abstract getModalTitle(): string;
    public abstract getActionCreator(): EditActionCreator<Service>;
    public abstract jsx(): React.ReactElement<any>;

    public render() {
        const input = this.props.state.input;

        return (
            <Modal 
                title={ this.getModalTitle() }
                visible={ this.props.state.visible}>
                    <Control>
                        <ConfirmableButton 
                            value="REMOVE" 
                            onConfirm={ this.onRemove }/>
                    </Control>
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

    private onRemove = (): void => {
        this.getActionCreator()
            .remove(this.props.dispatch, this.props.state.id);
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
