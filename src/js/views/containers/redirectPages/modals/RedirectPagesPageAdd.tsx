import * as React from 'react';

const reduxForm = require('redux-form');
const Field = reduxForm.Field;

export default reduxForm({
    form: 'RedirectPagesPageAdd'
})(
class Container extends React.Component<Props, void> {
    public render() {
        return (
            <form 
                onSubmit={ this.props.handleSubmit(this.props.onSubmit) }>
                    <div>
                        <label>Test Type</label>
                        <div>
                        <Field
                            name="test"
                            component="input" />
                        </div>
                    </div>
                    <div>
                        <label>Date</label>
                        <div>
                        <Field
                            name="date"
                            component="input" />
                        </div>
                    </div>
                    <div>
                        <label>Time</label>
                        <div>
                        <Field
                            name="time"
                            component="input" />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
            </form>
        );
    }
});

interface Props {
    error: any;
    handleSubmit(arg?): void
    onSubmit(): void
}