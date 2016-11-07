import LandingPagesState from '../../model/state/LandingPagesState';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';
import map from './LandingPagesMapper';
import reduce from '../crud/EditReducer';

const load = (dto) => map(dto, new LandingPagesState());

const state = new LandingPagesState();
const reducer = reduce<LandingPagesState>(state, load, 'landingPages'); 
export default reducer; 
