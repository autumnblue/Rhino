import CrudState from './CrudState';

class ClientState extends CrudState {
    constructor(context?) {
        super(context);
    }

    id = null
    name = ''
    url = ''
    timezone = ''
}

export default ClientState ;
