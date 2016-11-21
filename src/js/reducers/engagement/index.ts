import reduce from '../common';
import EngagementState from '../../model/stateZ/engagement/EngagementState'
import EngagementRecord from '../../model/stateZ/engagement/EngagementRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new EngagementState(), new EngagementRecord());