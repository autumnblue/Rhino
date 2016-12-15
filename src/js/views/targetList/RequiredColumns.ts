const required = [
    'firstname',
    'lastname',
    'email',
    'timezone',
    'id'
]

const isRequired = (name): boolean => {
    return required.filter(str => {
        return name === str;
    }).length > 0
}

export default isRequired;