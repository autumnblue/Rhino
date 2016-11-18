import reduce from '../common';
import OAuthResultState from '../../model/stateZ/oAuthResult/OAuthResultState'
import OAuthResultRecord from '../../model/stateZ/oAuthResult/OAuthResultRecord'

export default reduce(new OAuthResultState(), new OAuthResultRecord());