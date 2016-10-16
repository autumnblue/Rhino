import { ValidatableInput } from '../../common/validation/ValidatableInput';
import { ListState } from './page/ListState';

export interface UserState {
    add: UserAddState,
    edit: UserEditState,
    root: UserPageState
}

export interface UserAddState {
    input?: NewFields
    visible?: boolean
    isValid?: boolean
}

export interface UserEditState {
    input?: Fields
    visible?: boolean
    isValid?: boolean
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

export interface Fields {
    username: ValidatableInput,
    email: ValidatableInput,
    firstName: ValidatableInput,
    lastName: ValidatableInput,
}

export type NewFields = Fields & { password: ValidatableInput, confirm: ValidatableInput }