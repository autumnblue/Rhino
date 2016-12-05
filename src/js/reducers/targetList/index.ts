import reduce from '../common';
import TargetListState from '../../model/state/targetList/TargetListState'
import TargetListRecord from '../../model/state/targetList/TargetListRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new TargetListState(), new TargetListRecord());