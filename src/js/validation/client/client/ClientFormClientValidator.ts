import Model from '../../../model/state/ClientState';

const validate = (values:Model): Model => {
    let errors:Model = new Model();

    if(!values.name)
        errors.name = 'Name required.';
    if(!values.url)
        errors.url = 'URL required.';
    if(!values.timezone)
        errors.url = 'Timezone required.';

    return errors;
}

export default validate;