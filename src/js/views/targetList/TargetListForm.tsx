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

// //helper to create a fixed number of rows
// function createRows(numberOfRows){
//   var _rows = [];
//   for (var i = 1; i < numberOfRows; i++) {
//     _rows.push({
//       id: i,
//       task: 'Task ' + i,
//       complete: Math.min(100, Math.round(Math.random() * 110)),
//       priority : ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
//       issueType : ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
//       startDate: randomDate(new Date(2015, 3, 1), new Date()),
//       completeDate: randomDate(new Date(), new Date(2016, 0, 1))
//     });
//   }
//   return _rows;
// }

// //Columns definition
// var columns = [
// {
//   key: 'id',
//   name: 'ID',
//   width: 80
// },
// {
//   key: 'task',
//   name: 'Title',
//   editable : true
// },
// {
//   key: 'priority',
//   name: 'Priority',
//   editable : true
// },
// {
//   key: 'issueType',
//   name: 'Issue Type',
//   editable : true
// },
// {
//   key: 'complete',
//   name: '% Complete',
//   editable : true
// },
// {
//   key: 'startDate',
//   name: 'Start Date',
//   editable : true
// },
// {
//   key: 'completeDate',
//   name: 'Expected Complete',
//   editable : true
// }
// ]

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
               
               <div id="spreadsheet">
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

                    <ReactDataGrid
                        enableCellSelect={true}
                        columns={columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this.props.record.target.length}
                        minHeight={500}
                        onRowUpdated={this.onUpdateRow} />
                </div>

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

