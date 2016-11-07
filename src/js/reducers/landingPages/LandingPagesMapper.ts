import LandingPagesState from '../../model/state/LandingPagesState';
import { LandingPagesDto } from '../../model/dto/LandingPagesDto';

const map = (dto: LandingPagesDto, state: LandingPagesState): LandingPagesState => (
    {
        id: dto.id,
        name: dto.name,
        url: dto.url,
        path: dto.path,
        status: dto.status.toString(),
        pageType: dto.page_type,
        scraperUserAgent: dto.scraper_user_agent.toString(),
        dateCreated: dto.date_created
    }    
)

export default map;