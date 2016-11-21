import reduce from '../common';
import LandingPageState from '../../model/stateZ/landingPage/LandingPageState'
import LandingPageRecord from '../../model/stateZ/landingPage/LandingPageRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new LandingPageState(), new LandingPageRecord());