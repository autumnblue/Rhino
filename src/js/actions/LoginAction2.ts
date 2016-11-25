import { CurrentUser } from '../CurrentUser';
import { Identity } from '../security/Identity';
import IdentityService from '../service/IdentityService';
import { ActionType } from './ActionType';
import handleErr from '../validation/submit/SubmitValidationHandlerZ';

class LoginAction {
    public submit(dispatch, values): Promise<any> {
        const { host, port, username, password } = values;
        
        CurrentUser.Session.setSocket({ host, port });

        return this.login(dispatch, username, password);
    }

    private login(dispatch, username: string, password: string): Promise<any> {
        return new IdentityService()
        .login({ username, password })
        .then(authz => {
            Identity.login(authz.token)

            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: authz
            });
        })
        // .catch(err => {
        //     Identity.reset();
        //     return handleErr(err, <any>{
        //         toForm(dto) {
        //             return {
        //                 username: dto.username,
        //                 password: dto.password
        //             }
        //         }
        //     });
        // });
    }

    public logout(dispatch): void {
        dispatch({
            type: ActionType.LOGOUT
        })
    }
}

export default new LoginAction();