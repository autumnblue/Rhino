import LandingPagesState from '../../model/state/LandingPagesState';
import reduce from '../crud/AddReducer2';

export const reducer = reduce<LandingPagesState>(new LandingPagesState()); 

