export const REGISTER_DATAFORM: {
    name: "username" | "email" | "password" | "confirmPassword" | "organizationName",
    label: string,
    placeholder: string,
    description: string
}[] = [
    {
        name: 'username',
        label: 'Nombre de Usuario',
        placeholder: 'Ingresa tu nombre de usuario',
        description: 'Este será tu nombre dentro de la plataforma.',
    },
    {
        name: 'email',
        label: 'Correo Electrónico',
        placeholder: 'Ingresa tu correo',
        description: 'Usaremos este correo para enviarte notificaciones.',
    },
    {
        name: 'password',
        label: 'Contraseña',
        placeholder: 'Ingresa tu contraseña',
        description: 'La contraseña de tu cuenta.',
    },
    {
        name: 'confirmPassword',
        label: 'Confirma tu Contraseña',
        placeholder: 'Repite tu contraseña',
        description: 'Asegúrate de que las contraseñas coincidan.',
    },
    {
        name: 'organizationName',
        label: 'Nombre de la Organización',
        placeholder: 'Nombre de tu empresa o negocio',
        description: 'Nombre con el que identificaremos tu organización.',
    }
];
