import { atom } from 'recoil';
import { UserModel } from '../models/UserModels';

const userState = atom<UserModel>({
    key: 'userState',
    default: {
        UserId: '',
        UserPassword: '',
    }
});

export default {
    userState,
};