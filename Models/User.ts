export enum Role {
    CUSTOMER = 'CUSTOMER',
    ADMIN = 'ADMIN'
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
}