import Dto from '../../model/dtoZ/Dto';
import PagedDto from '../../model/dtoZ/PagedDto';
import Ref from '../../model/stateZ/Ref';

const tie = (owner: Dto, ownerKey: string, targets: Dto[], targetKey: string): Ref => {
    const ref = targets.filter(target => owner[ownerKey] == target.id)[0];
    return ref && {
        id: ref.id,
        text: ref[targetKey]
    }
}

export const refLandingPage = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'landing_page', targets, 'name')
}

export const refPhishingDomain = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'domain', targets, 'domain_name')
}

export const refCampaign = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'campaign', targets, 'name')
}

export const refEmailTemplate = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'email_template', targets, 'name')
}

export const refSchedule = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'interval', targets, 'name')
}

export const refRedirectPage = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'redirect_page', targets, 'name')
}

export const refEmailServer = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'email_server', targets, 'host');
}


