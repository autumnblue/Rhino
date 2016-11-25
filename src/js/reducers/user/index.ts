import reduce from '../common';
import UserState from '../../model/stateZ/user/UserState'
import UserRecord from '../../model/stateZ/user/UserRecord'

export default reduce(new UserState(), new UserRecord());