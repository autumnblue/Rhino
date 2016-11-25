import reduce from '../common';
import EmailServerState from '../../model/stateZ/emailServer/EmailServerState'
import EmailServerRecord from '../../model/stateZ/emailServer/EmailServerRecord'

export default reduce(new EmailServerState(), new EmailServerRecord());