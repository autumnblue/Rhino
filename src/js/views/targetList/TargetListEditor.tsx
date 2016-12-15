import * as React from 'react';
import { connect } from 'react-redux';
const ReactDataGrid = require('react-data-grid');
import { copy } from '../../common/Util';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FieldProps from '../common/fields/FieldProps';
import TextField from 'material-ui/TextField'
import {
    Toolbar, 
    ToolbarGroup, 
    ToolbarSeparator,
    ToolbarTitle } from 'material-ui/Toolbar';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import { isRequired, required } from './RequiredColumns';
import Checkbox from 'material-ui/Checkbox';

class TargetListEditor extends React.Component<FieldProps & { handleSplit: Function }, { target: any, isOpen: boolean, columnName?: string, selectedColumn?: string, checkedColumns?: string[] }> {
    private selectedRow: number;
    private selectedCol: number;
    private columns: any[];
    
    constructor(props) {
        super(props);
        this.state = {
            target: this.props.input.value,
            isOpen: false,
            checkedColumns: new Array<string>()
        };
    }

    public render() {
        const columns = this.state.target && this.state.target.length > 0
            ? Object.keys(this.state.target[0])
            .map(key => {
                return {
                    key,
                    name: key,
                    editable: true,
                    headerRenderer: isRequired(key) ? null: this.splittableHeader(key)
                }
            })
            : required.map(value => {
                return {
                    value,
                    name: value,
                    editable: true
                }
            });

        return (
            <div id="ss-dialog">
                <div>
                <FlatButton 
                    label="Modify Target List"
                    labelPosition="before"
                    primary={ true } 
                    icon={ <ModeEdit /> }
                    onTouchTap={ this.open }/>
                </div>

                <Dialog
                    title="Target List Editor"
                    actions={[,
                        <FlatButton
                            label="Cancel"
                            default={true}
                            onTouchTap={ this.close }/>,
                        <RaisedButton
                            label="OK"
                            primary={true}
                            onTouchTap={ this.handleOk } />,
                    ]}
                    style={ { paddingTop: 0} }
                    repositionOnUpdate={false}
                    contentStyle={ 
                        { 
                            width: '95%',
                            maxWidth: 'none' 
                        } 
                    }
                    open={ !!this.state.isOpen }  >
                        <div>
                            <Toolbar style={ { backgroundColor: 'rgb(28,28,38)', marginBottom: 10, paddingBottom: 5 } }>
                                    <ToolbarGroup>
                                        <ToolbarTitle text="Row" />
                                        <IconButton
                                            tooltip="Add Row" 
                                            onTouchTap={ this.handleRowAdd }>
                                                <AddCircle />
                                        </IconButton>
                                        <IconButton
                                            tooltip="Remove Row"  
                                            onTouchTap={ this.handleRowRemove }>
                                                <RemoveCircle />
                                        </IconButton>

                                        <ToolbarSeparator />
                                        
                                        <ToolbarTitle text="Column" style={{ marginLeft: 20 }}/>
                                        <TextField
                                            hintText="New Column"
                                            onBlur={
                                                (event) => {
                                                    this.handleColumnInput(event.target.value);
                                                } }
                                        />
                                        <IconButton
                                            tooltip="Add Column"  
                                            onTouchTap={ this.handleColumnAdd }>
                                                <AddCircle />
                                        </IconButton>
                                        <IconButton
                                            tooltip="Remove Column" 
                                            disabled={ isRequired(this.state.selectedColumn) } 
                                            onTouchTap={ this.handleColumnRemove }>
                                                <RemoveCircle />
                                        </IconButton>

                                        <ToolbarSeparator />

                                        <RaisedButton
                                            label="Split Selected & Save"
                                            disabled={ this.state.checkedColumns.length == 0 }
                                            default={true}
                                            onTouchTap={ this.handleSplit }/>
                                    </ToolbarGroup>
                                </Toolbar>            
   
                            <div id="spreadsheet">
                                <ReactDataGrid
                                    onCellSelected={ this.handleCellSelect }
                                    enableCellSelect={true}
                                    columns={columns}
                                    rowGetter={this.rowGetter}
                                    rowsCount={this.props.input.value.length}
                                    minHeight={500}
                                    onRowUpdated={this.onUpdateRow} 
                                    rowRenderer={ this.row } />
                            </div>
                        </div>
                </Dialog>
            </div>
        )
    }

    private handleSplit = () => {
        const categorized = this.state.target
            .map(target => {
                let obj = {};
                Object.keys(target).forEach(key => {
                    if(this.state.checkedColumns.indexOf(key) > - 1)
                        obj[key] = target[key];

                    required.forEach(str => {
                        obj[str] = target[str]
                    })
                })
                return obj;            
            });

        //TargetListAction.create(this.props['dispatch'], categorized);
        this.props.handleSplit(categorized);
    }

    private handleCellSelect = (cell) => {
        this.selectedRow = cell.rowIdx;
        this.selectedCol= cell.idx;

        this.state.selectedColumn = this.columns[cell.idx].key;
        this.setState(Object.assign({}, this.state)); 
    }

    private splittableHeader = (key) => {
        return (
            <span>
                <Checkbox
                    onCheck={
                        (event, isChecked) => {
                            if(isChecked) 
                                this.state.checkedColumns.push(key);
                            else
                                this.state.checkedColumns
                                    .splice(this.state.checkedColumns.indexOf(key))
                            this.setState(Object.assign({}, this.state));
                        }
                    } 
                    label={ key } 
                    style={{ marginRight: 4 }}/>
            </span>
        );
    }

    private row = React.createClass({
        handleClick: (columns) => {
            this.columns = columns; //TODO remove instant columns property
        },
        render: function() { 
            return (
                <div 
                    onClick={ () => { 
                        this.handleClick(this.props.columns) } 
                    }>
                        <ReactDataGrid.Row ref="row" {...this.props}/>
                </div>) 
        }
    });

    private open = () => {
        this.setState(Object.assign(this.state, { isOpen: true }));
    }

    private close = () => {
        this.setState(Object.assign(this.state, { isOpen: false }));
    }

    public componentWillReceiveProps(nextProps: FieldProps) {
        this.setState(Object.assign(this.state, { target: nextProps.input.value }))
    }

    private rowGetter = (rowIdx) => {
        return copy<any>(this.props.input.value[rowIdx])
    }

    private onUpdateRow = (event) => {
        Object.assign(this.props.input.value[event.rowIdx], event.updated);
    }

    private handleColumnAdd = () => {
        this.state.target.forEach(column => {
            column[this.state.columnName] = ''
        })

        this.setState(Object.assign({}, this.state));
    }

    private handleColumnInput = (value) => {
        this.state.columnName = value;

        this.setState(Object.assign({}, this.state));
    }

    private handleRowAdd = () => {
        const newRow = Object.assign({}, this.state.target[0])
            
        Object.keys(newRow)
        .forEach(key => {
            newRow[key] = '';
        });

        this.state.target.push(newRow);
        this.setState(Object.assign({}, this.state));
    }

    private handleRowRemove = () => {
        this.state.target.splice(this.state.target.indexOf(this.selectedRow));
        this.setState(Object.assign({}, this.state));
    }

    private handleColumnRemove = () => {
        const key = this.columns[this.selectedCol].key;
        this.state.target.forEach(target => {
            delete target[key];
        });
        this.setState(Object.assign({}, this.state));
    }

    private handleOk = () => {
        this.props.input.onChange(this.state.target);
        this.close();
    }
}

interface Props {
    target: { [key:string]: string }[],
    handleUpdateRow(event): void
}

export default TargetListEditor;

