import * as Model from '../../../model/dto/LandingPagesDto';
const reduxForm = require('redux-form');

const handle = (errors: any) => {
    let errObj = { _error: 'Submission failed' };
    Object.keys(errors).forEach(key => {
        if(errors[key])
            errObj[key] = errors[key][0]
    })
    if(errors)
        throw new reduxForm.SubmissionError(errObj);
}

export default handle;