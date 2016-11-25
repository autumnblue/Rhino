import reduce from '../common';
import ProfileState from '../../model/stateZ/profile/ProfileState'
import ProfileRecord from '../../model/stateZ/profile/ProfileRecord'

export default reduce(new ProfileState(), new ProfileRecord());