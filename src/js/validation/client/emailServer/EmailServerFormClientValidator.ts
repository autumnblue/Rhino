import Model from '../../../model/state/EmailServerState';
import { 
        isBlank, 
        isEmail, 
        isNumber } from '../../ValidationUtil';


const validate = (values:Model): Model => {
    let errors:Model = new Model();

    if(isBlank(values.host))
        errors.host = 'Host is required';
    if(isBlank(values.login))
        errors.login = 'Login is required.';
    if(isBlank(values.password))
        errors.password = 'Password is required.';
    if(!isNumber(values.port))
        errors.port = 'Required Port must be numeric.'

    return errors;
}

export default validate;