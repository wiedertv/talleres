export const REGISTER_DATAFORM: {
    name: "username" | "email" | "password" | "confirmPassword",
    label: string,
    placeholder: string,
    description: string
}[] = [
    {
        name: 'username',
        label: 'Username',
        placeholder: 'Enter your username',
        description: 'This is your nickname on the platform.',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        description: 'we will use this to send you information related to your account',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        description: 'password of your account',
    },
    {
        name: 'confirmPassword',
        label: 'Confirm your password',
        placeholder: 'Enter your password again',
        description: 'confirm your password',
    }
];