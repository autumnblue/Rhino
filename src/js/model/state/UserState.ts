import { ValidatableInput } from '../../common/validation/ValidatableInput';

export interface UserState {
    add: UserAddState,
    edit: UserEditState,
    list: UserListState
}

export interface UserAddState {
    input?: Fields
    isValid?: boolean
}

export interface UserEditState {
    input?: Fields
    visible?: boolean
    isValid?: boolean
}

export interface UserListState {
    data?: User[]
}

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