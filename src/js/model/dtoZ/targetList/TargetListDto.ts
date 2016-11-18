import CommitableDto from '../CommitableDto';

interface ClientDto extends CommitableDto {
    "description": string,
    "client": number,
    "nickname": string,
    "target": number[]
}

export default ClientDto;