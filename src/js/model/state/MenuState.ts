export interface MenuState {
    handle: string,
    identity: { selected: boolean }
    top: { selected: boolean }
    targets: { selected: boolean }
    pages: { selected: boolean }
    email: { selected: boolean }
    scrape: { selected: boolean }
    config: { selected: boolean }
    oauth: { selected: boolean }
}