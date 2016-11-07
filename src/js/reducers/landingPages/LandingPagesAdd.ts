import LandingPagesState from '../../model/state/LandingPagesState';
import reduce from '../crud/AddReducer';

const state = new LandingPagesState();
const reducer = reduce<LandingPagesState>(state, 'landingPages'); 
export default reducer;
