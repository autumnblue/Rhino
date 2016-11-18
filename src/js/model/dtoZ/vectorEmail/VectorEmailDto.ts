import CommitableDto from '../CommitableDto';

interface VectorEmailDto extends CommitableDto {
    "target": number,
    "engagement": number,
    "state": number,
    "send_at": string,
    "result_event": number[],
    "error": string,
    "id": number,
    "sent_timestamp": string
}

export default VectorEmailDto;