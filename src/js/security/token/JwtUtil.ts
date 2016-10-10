import { Claims } from './Claims';
import { CurrentUser } from '../../CurrentUser';
import * as moment from 'moment';

export const decode = (): Claims => {
    const jwt = CurrentUser.Session.getToken();
    if(jwt)
        return require('jwt-decode').decode(jwt)

    return null;
}

export const isExpired = (claims: Claims): boolean => {
    const now = moment().utc().valueOf() //TODO verify format in claim
    return moment(now).isSameOrAfter(claims.exp);
}