import { IUser } from 'app/core/user/user.model';

export interface IBlog {
    id?: number;
    name?: string;
    hnadle?: string;
    user?: IUser;
}

export class Blog implements IBlog {
    constructor(public id?: number, public name?: string, public hnadle?: string, public user?: IUser) {}
}
