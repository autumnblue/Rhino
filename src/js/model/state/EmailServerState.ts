import CrudState from './CrudState';

class EmailServerState implements CrudState {
    id = null
    useTls = false;
    testRecipient = null
    host = null
    port = null
    login = null
    password = null
}

export default EmailServerState ;