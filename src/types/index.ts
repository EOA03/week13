export interface LoginForm{
    email: string;
    password: string
}

export interface RegisterForm{
    name: string;
    email: string;
    password: string
}

export interface CategoryList{
    id: string;
    name: string;
    is_active: boolean;
}

export type CategoryForm = Omit<CategoryList, 'id'>