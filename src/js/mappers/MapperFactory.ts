import { ServiceType } from '../service/ServiceFactory';
import CrudState from '../model/state/CrudState';
import { Dto } from '../model/dto/Dto';
import Mapper from './Mapper';

const of = (type: ServiceType): Mapper  => {
    switch(type) {
        case ServiceType.CLIENT:
            return require('./ClientMapper').default;
    }
}

export default of; 