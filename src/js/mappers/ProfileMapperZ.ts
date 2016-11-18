import Mapper from './MapperZ';
import ProfileXDto from '../model/dtoZ/profile/ProfileXDto';
import ProfileDto from '../model/dtoZ/profile/ProfileDto';
import ProfileState from '../model/stateZ/profile/ProfileState';
import ProfileRecord from '../model/stateZ/profile/ProfileRecord';
import { 
    refUser
} from './common/AssemblyUtil';

class ProfileMapperStatic implements Mapper { 
    toState(result: ProfileXDto): ProfileState {
        const state = new ProfileState();

        state.records = result.profiles.map(dto => {             
            return {
                timezone: dto.timezone,
                user: refUser(dto, result.users),
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: ProfileDto) {
        return {
            timezone: dto.timezone,
            user: dto.user,
            id: dto.id
        }
    }

    toDto(state: ProfileRecord): ProfileDto {
        return {
            "timezone": state.timezone,
            "user": state.user && state.user.id,
            commit: true,
            id: state.id            
        }
    }
}
const ProfileMapper = new ProfileMapperStatic();
export default ProfileMapper;