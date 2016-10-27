import * as popsicle from 'popsicle';
import { Identity } from '../security/Identity';

const addAuthzHeader = (headers: { [name: string]: string }): Promise<void> => {
    return Identity.getToken()
    .then(token => {
        headers['Authorization'] = `JWT ${token}`;
    })    
}

export const post = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'POST',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        if(response.status >= 400)
            throw new Error(); //TODO: wrap in ClientError?

        return <T>response.body;
    });
}

export const get = async <T>(url: string, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {};
    if(authz) await addAuthzHeader(headers);

    return await popsicle.request({
        method: 'GET',
        url: url,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => <T>response.body);
}

export const put = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/json'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'PUT',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return <T>response.body;
    });
}

export const patch = async <T>(url: string, body: any, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/json'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'PUT',
        url: url,
        body: body,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return <T>response.body;
    });
}

export const del = async <T>(url: string, authz = true): Promise<T> => {
    let headers: { [name: string]: string } = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    if(authz) await addAuthzHeader(headers);
    
    return await popsicle.request({
        method: 'DELETE',
        url: url,
        headers: headers
    })
    .use(popsicle.plugins.parse('json'))
    .then(response => {
        return <T>response.body; //TODO: error handling when != 204
    });
}