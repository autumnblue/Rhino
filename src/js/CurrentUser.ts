import { SessionStorageKey, Dir } from './common/Constants';

class PageStatic {
    public isLogin(): boolean {
        return this.currentPage().endsWith(Dir.LOGIN);
    }

    public to(href: string): void {
        window.location.href = href;
    }

    private currentPage(): string {
        return window.location.href;
    }
}

const key = SessionStorageKey;
class SessionStatic {
    private referer: string;

    public setReferer(url: string) {
        sessionStorage.setItem(key.REFERER, url)
    }

    public getReferer() {
        return sessionStorage.getItem(key.REFERER);
    }

    public setToken(token: string) {
        sessionStorage.setItem(key.TOKEN, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(key.TOKEN);
    }

    public setSocket(socket: Socket) {
        sessionStorage.setItem(key.SOCKET, JSON.stringify(socket));
    }

    public getSocket() {
        return JSON.parse(
            sessionStorage.getItem(key.SOCKET)
        )
    }
}

interface Socket {
    host: string,
    port: number
}

class CurrentUserStatic {
    public Page = new PageStatic();
    public Session = new SessionStatic();
}

export const CurrentUser = new CurrentUserStatic();
