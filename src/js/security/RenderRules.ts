import { CurrentUser } from '../CurrentUser';
import { Identity } from './Identity';
import { Dir } from '../common/Constants'; 
import { Role } from './Role';

export const permit = (role: Role): void => {
    switch(role) {
        case Role.AUTHENTICATED:
            if(!Identity.isLoggedIn() 
                && !CurrentUser.Page.isLogin()) {
                    CurrentUser.Session
                        .setReferer(window.location.href);
                    CurrentUser.Page.to(Dir.LOGIN)
            }
            break;       
    }
}