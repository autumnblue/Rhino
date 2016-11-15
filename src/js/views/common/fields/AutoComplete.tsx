import * as React from 'react';
import Ref from '../../../model/stateZ/Ref';
import AutoComplete from 'material-ui/AutoComplete';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Props from './CustomProps';
import FieldProps from './FieldProps';

const renderAutoComplete = (props: Props & FieldProps) => {  
    return <span>    
        <AutoComplete
            hintText={ props.label }
            dataSource={ props.data && props.data.suggestions || [] }
            dataSourceConfig={ { text: 'text', value: 'id'} }
            filter={AutoComplete.fuzzyFilter}
            floatingLabelText={ props.label }
            maxSearchResults={ 10 } 
            errorText={
                props.meta.touched && props.meta.error }
            onNewRequest={
                (chosen: Ref) => {
                    props.input.onChange(`${chosen.id}`)
                }
            }
            onUpdateInput={
                (searchText: string, dataSource: Ref[]) => {
                    !dataSource.length
                    && props.asyncSrc
                    && props.asyncSrc(props.meta.dispatch)
                }
            }
            searchText={props.input.value || props.input.value['text']}
        />
        <RefreshIndicator
            size={25}
            left={70}
            top={0}
            status={ props.data && props.data.loading ? 'loading' : 'hide'}/>
    </span>  
}

export default renderAutoComplete