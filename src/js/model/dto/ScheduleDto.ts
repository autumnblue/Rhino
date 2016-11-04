import { CommitableDto } from './CommitableDto';

export interface ScheduleDto extends CommitableDto {
    start_type: string,
    start_at: string,
    name: string,
    batch_interval: string,
    batch_size: string,
    time_between_batches: string
}