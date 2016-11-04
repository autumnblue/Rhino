import * as React from 'react';
import { Form } from '../../../model/state/ClientState';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';
import { DropdownMessageWrapper } from '../common/message/DropdownMessageWrapper';
import { SearchSelection } from '../common/dropdown/SearchSelection';
const moment = require('moment-timezone'); 

export class PhishingDomainEdit extends React.Component<Props, void> {
    public render() {
        const input = this.props.input
        const timezones = moment.tz.names().map(name => {
            return { text: name };
        });

        return (
            <form>
                <label>Name</label>
                <InputMessageWrapper msg={this.props.input.name.validationMsg}>
                    <input 
                        type="text"
                        value={input.name.value} 
                        onChange={this.props.onNameChange} />
                </InputMessageWrapper>
                
                <label>URL</label>
                <InputMessageWrapper msg={this.props.input.url.validationMsg}>
                    <input 
                        type="text"
                        value={input.url.value} 
                        onChange={this.props.onUrlChange} />
                </InputMessageWrapper>
                
                <label>Default Timezone</label>
                <DropdownMessageWrapper msg={this.props.input.timezone.validationMsg}>
                    <SearchSelection
                        data={ timezones } 
                        onSelect={ this.props.onTimezoneSelect } />
                </DropdownMessageWrapper>
            </form>
        );
    }
}

interface Props {
    input: Form
    onNameChange(event): void
    onUrlChange(event): void
    onTimezoneSelect(selection: string): void
}