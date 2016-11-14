import Mapper from '../../mappers/MapperZ';
const reduxForm = require('redux-form');
import * as popsicle from 'popsicle';

const handle = (object: popsicle.Response, map: Mapper) => {
    if(!object) return Promise.reject(object);

    if(object.status == 400) {
        const errors = object.body;
        let errObj = { _error: 'Submission failed' };
        Object.keys(errors).forEach(key => {
            if(errors[key])
                errObj[key] = errors[key][0]
        })

        const mapped = map.toForm(errObj);
        throw new reduxForm.SubmissionError(mapped);
    }

    else return Promise.reject(object);
}

export default handle;