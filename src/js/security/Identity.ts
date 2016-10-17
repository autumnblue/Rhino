import * as jwt from './token/JwtUtil';
import { Claims } from './token/Claims';
import { CurrentUser } from '../CurrentUser';
import { Dir } from '../common/Constants';

class IdentityStatic {
    private claims: Claims

    public login(token: string) {
        CurrentUser.Session.setToken(token);
        const referer = CurrentUser.Session.getReferer();
        //TODO if no referer, go to landing
        CurrentUser.Page.to(referer);
    }

    public isLoggedIn(): boolean {
        return this.hasToken()
            && !this.isExpired();
    }

    public logout(): void {
        CurrentUser.Session.setToken(null);
        CurrentUser.Session.setSocket(null);
        CurrentUser.Page.to(Dir.LOGIN);
    }

    private hasToken(): boolean{
        return jwt.decode() ? true: false;
    }

    private isExpired(): boolean {
        return jwt.isExpired(this.getClaims());
    }

    private getClaims(): Claims {
        if(!this.claims) {
            this.claims = jwt.decode();
        }

        return this.claims;
    }
}

export const Identity = new IdentityStatic();
