import { ValidatableInput } from '../../common/validation/ValidatableInput';

export interface UserState {
    add: UserAddState,
    edit: UserEditState,
    list: UserListState
}

export interface UserAddState {
    input?: Fields
}

export interface UserEditState {
    input?: Fields
    inFocus?: boolean
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

interface Fields {
    username: ValidatableInput,
    email: ValidatableInput,
    firstName: ValidatableInput,
    lastName: ValidatableInput,
}