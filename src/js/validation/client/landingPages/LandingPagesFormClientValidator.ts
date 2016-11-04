import Model from '../../../model/state/LandingPagesState';

const validate = (values:Model): Model => {
    let errors:Model = new Model();

    // if(!values.test)
    //     errors.test = 'Please indicate a Test'
    // if(!values.date)
    //     errors.date = 'Please indicate a Date'
    // if(!values.time)
    //     errors.time = 'Please indicate a Time'

    return errors;
}

export default validate;
