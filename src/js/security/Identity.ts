import * as jwt from './token/JwtUtil';
import { Claims } from './token/Claims';
import { CurrentUser } from '../CurrentUser';
import { Dir } from '../common/Constants';

class IdentityStatic {
    private claims: Claims;
    private baseUrl: string;
    private handle: string;

    public getHandle() {
        if(!this.handle) {
            this.handle = jwt.getUser(this.getClaims());
        }
        return this.handle;
    }

    public login(token: string) {
        CurrentUser.Session.setToken(token);
        const referer = CurrentUser.Session.getReferer();
        CurrentUser.Page.to(referer || '\\');
    }

    public isLoggedIn(): boolean {
        return this.hasToken()
            && !this.isExpired();
    }

    public logout(): void {
        this.reset();
        CurrentUser.Page.to(Dir.LANDING);
    }

    public reset(): void {
        CurrentUser.Session.setToken(null);
        CurrentUser.Session.setSocket(null);
        this.baseUrl = null;
        this.claims = null;
        this.handle = null;
    }

    public Server = {
        getBaseUrl: () => this.getBaseUrl()
    }

    private getBaseUrl(): string {
        if(!this.baseUrl) {
            const socket = CurrentUser.Session.getSocket();
            const host = socket.host;
            const port = socket.port 
                ? `:${socket.port}` 
                : '';
            this.baseUrl = `${host}${port}`    
        }
        
        return this.baseUrl;
    };

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
