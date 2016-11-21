import reduce from '../common';
import OAuthEngagementState from '../../model/stateZ/oAuthEngagement/OAuthEngagementState'
import OAuthEngagementRecord from '../../model/stateZ/oAuthEngagement/OAuthEngagementRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new OAuthEngagementState(), new OAuthEngagementRecord());