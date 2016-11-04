import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import LandingPagesState from '../../model/state/LandingPagesState';
import { copy } from '../../common/Util';
import { ValidatableInput } from '../../common/validation/ValidatableInput';
import reduce from '../crud/AddReducer2';

export const reducer = reduce<LandingPagesState>(new LandingPagesState()); 

