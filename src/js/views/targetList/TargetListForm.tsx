import * as React from 'react';
import { connect } from 'react-redux';
import TargetListFlatViewRecord from '../../model/state/targetListFlatView/TargetListFlatViewRecord';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import TargetListAction from '../../actions/TargetListAction'
import FetchAction from '../../actions/FetchAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import textArea from '../common/fields/TextArea';
import editor from '../common/fields/TextEditor';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ErrAlert from '../common/ErrorAlert';
const ReactDataGrid = require('react-data-grid');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

 //helper to generate a random date
// function randomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
//}

const tf = (props: any) => <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        type={props.type}
        onBlur={
            (event) => {
                props.meta.dispatch(TargetListAction.addColumn(event.target.value));
            } }
        disabled={ props['disabled'] }
    />

const FORM = 'TargetListForm'

let targetListForm = reduxForm.reduxForm({
    form: FORM
})(
(class TargetListRoot extends React.Component<FormProps 
    & { record: TargetListFlatViewRecord }
    & { newColumnValue: string }, { rows: any[]}> {
        constructor() {
            super();
        }         
        
        private rowGetter = (rowIdx) => {
            return this.props.record.target[rowIdx]
        }

        private addColumn(column: string, columns) {
            if(column) {
                columns.push({
                    key: this.props.newColumnValue,
                    name: this.props.newColumnValue,
                    editable: true
                })
                //this.setState(this.state)
            }
        }

        public render() {
            

            const columns = Object.keys(this.props.record.target[0])
            .map(key => {
                return {
                    key,
                    name: key,
                    editable: true
                }
            })

            // this.addColumn(this.props.newColumnValue, columns);                    

        return <form 
            onSubmit={ this.props.handleSubmit(this.props.submit) }>
                <ErrAlert errorMsg={ this.props.error } />

                <div>
                    <Field
                        name="description"
                        label="Description"
                        component={ textArea } />
                </div>
                <div>
                    <Field
                        name="nickname"
                        label="List name"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="client"
                        label="Clients"
                        fetch={ FetchAction.getClientSuggestions }
                        component={ autoComplete } /> 
                </div>
               
                <RaisedButton 
                    label="Add Row" 
                    onTouchTap={ this.onAddRow }/>

                <Field
                    name="newColumn"
                    label="Column Name"
                    component={ tf } />
                <RaisedButton 
                    label="Add Column" 
                    onTouchTap={ this.onColumnAdd }/>

                <Field
                    name="target"
                    component={
                        (props) => <div id="spreadsheet">

                            <ReactDataGrid
                                enableCellSelect={true}
                                columns={columns}
                                rowGetter={this.rowGetter}
                                rowsCount={this.props.record.target.length}
                                minHeight={500}
                                onRowUpdated={this.onUpdateRow} />
                        </div>
                    } />
               
                <Submit />
        </form>
        }

        private onUpdateRow = (event) => {
            this.props.dispatch(TargetListAction.updateRow(event))
        }

        private onAddRow = (event) => {
            this.props.dispatch(TargetListAction.addRow(event))
        }

        private onColumnAdd = () => {
            
        }
}));

// const selector = reduxForm.formValueSelector('TargetListForm')

export default connect(
    (state: AppState) => {
        // const newColumnValue = selector(state, 'newColumn')    
        return {
            // newColumnValue,
            initialValues: state.targetList.selectedRecord,
            record: state.targetList.selectedRecord    
        }
    }
)(targetListForm);

