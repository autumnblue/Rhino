import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { ListState } from './page/ListState';
import { IMessage } from '../../common/message/IMessage';

export interface UserState {
    add: UserAddState,
    edit: UserEditState,
    root: UserPageState
}

export interface UserAddState {
    alert?: IMessage
    input?: AddFields
    visible?: boolean
    isValid: boolean
}

export interface UserEditState {
    id?: number
    alert?: IMessage
    input?: EditFields
    visible?: boolean
    isValid: boolean
}

export type UserPageState = ListState<User>;

interface User {
    id?: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    isActive: boolean
}

export interface EditFields {
    username: ValidatableInput,
    email: ValidatableInput,
    firstName: ValidatableInput,
    lastName: ValidatableInput,
}

export type AddFields = EditFields & { password: ValidatableInput, confirm: ValidatableInput }