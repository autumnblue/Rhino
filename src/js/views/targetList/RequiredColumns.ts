export const required = [
    'firstname',
    'lastname',
    'email',
    'timezone',
    'id'
]

export const isRequired = (name): boolean => {
    return required.filter(str => {
        return name === str;
    }).length > 0
}