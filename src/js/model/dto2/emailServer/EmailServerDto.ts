interface EmailServerDto {
    "use_tls": boolean,
    "host": string,
    "login": string,
    "test_recipient": string,
    "password": string,
    "port": number,
    "id": number
}

export default EmailServerDto;