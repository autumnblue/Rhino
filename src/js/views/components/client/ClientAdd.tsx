import * as React from 'react';
import { AddFields } from '../../../model/state/ClientState';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class ClientAdd extends React.Component<Props, void> {
    public render() {
        const input = this.props.input
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

            </form>
        );
    }
}

interface Props {
    input: AddFields
    onNameChange(event): void
    onUrlChange(event): void
}