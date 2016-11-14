import { CrudState } from '../model/stateZ/CrudState';
import Record from '../model/stateZ/Record';
import CommitableDto from '../model/dtoZ/CommitableDto';
import PagedDto from '../model/dtoZ/PagedDto';
import Dto from '../model/dtoZ/Dto';

interface Mapper {
    toState(dto: PagedDto): CrudState;
    toForm(dto: any): any;
    toDto(state: Record): CommitableDto;
}

export default Mapper;