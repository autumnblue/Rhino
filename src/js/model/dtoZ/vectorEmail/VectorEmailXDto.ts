import PagedDto from '../PagedDto'
import VectorEmailDto from './VectorEmailDto';
import EngagementDto from '../engagement/EngagementDto';

interface VectorEmailXDto extends PagedDto {
    vector_emails: VectorEmailDto[];
    engagements: EngagementDto[];
}

export default VectorEmailXDto;

