export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    createdAt: Date;
    lastLogin: Date;
    isEmailVerified: boolean;
    avatarUrl: string;
}