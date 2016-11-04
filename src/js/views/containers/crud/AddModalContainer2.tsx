import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../../components/common/Modal';
import { Control } from '../../components/common/Controls';
import CrudState from '../../../model/state/CrudState';
import { AppState } from '../../../model/state/AppState';
import { CrudActionCreator2 } from '../../../actions/crud/CrudActionCreator2'
import { Service } from '../../../service/Service';

export class AddModalContainer2 extends React.Component<Props, void> { 
    public render() {
        return (
            <Modal 
                title={ this.props.title }
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

                    { this.props.children }
            </Modal>
        );
    }

    private onSubmit = ():void => {
        this.props.action
            .create(this.props.dispatch, this.props.state)
    }

    private onCancel = (): void => {
        this.props.action
            .cancel(this.props.dispatch);
    }
}

interface Props {
    dispatch?
    state?: CrudState
    title?: string
    action?: CrudActionCreator2<Service>
}

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
})

export const connect = (
    mapStateToProps: (state: AppState) => Props, 
    containerCls: React.ComponentClass<Props> | React.StatelessComponent<Props>) => {
        return react_redux.connect(mapStateToProps, mapDispatchToProps)(containerCls)
}
