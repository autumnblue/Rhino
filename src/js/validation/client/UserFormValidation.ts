import { UserEditState, UserAddState } from '../../model/state/UserState';

type UserInputState = UserEditState | UserAddState;

export class UserFormValidation {
    public static validate(state: UserInputState): UserInputState {
        return;
    }
}