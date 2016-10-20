import { Claims } from './Claims';
import { CurrentUser } from '../../CurrentUser';
import * as moment from 'moment';

export const decode = (): Claims => {
    const jwt = CurrentUser.Session.getToken();
    if(jwt)
        return (require('jwt-decode'))(jwt);

    return null;
}

export const isExpired = (claims: Claims): boolean => {
    const now = moment().utc().valueOf() / 1000
    return moment(now).isSameOrAfter(claims.exp);
}

export const getUser = (claims: Claims): string => {
    return claims ? claims.username : null;
}