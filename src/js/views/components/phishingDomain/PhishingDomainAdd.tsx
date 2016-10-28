import * as React from 'react';
import { Form } from '../../../model/state/PhishingDomainState';
import { InputMessageWrapper } from '../common/message/InputMessageWrapper';

export class PhishingDomainAdd extends React.Component<Props, void> {
    public render() {
        const inputs = this.props.inputs

        return (
            <form>
                <label>Domain Name</label>
                <InputMessageWrapper msg={inputs.domainName.validationMsg}>
                    <input 
                        type="text"
                        value={inputs.domainName.value} 
                        onChange={this.props.onDomainNameChange} />
                </InputMessageWrapper>
            </form>
        );
    }
}

interface Props {
    inputs: Form
    onDomainNameChange(event): void
}