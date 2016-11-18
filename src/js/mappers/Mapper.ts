import CrudState from '../model/state/CrudState';
import { Dto } from '../model/dto/Dto';
import { CommitableDto } from '../model/dto/CommitableDto';
import { ListState } from '../model/state/page/ListState';

interface Mapper {
    toState(dto: Dto): CrudState;
    toStates(dtos: any): CrudState[];
    toDto(state: CrudState): CommitableDto;
}

export default Mapper;