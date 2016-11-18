import LandingPageState from '../model/state2/landingPage/LandingPageState';
import LandingPageForm from '../model/state2/landingPage/LandingPageForm';
import LandingPageXDto from '../model/dto2/landingPage/LandingPageXDto';
import LandingPageDto from '../model/dto2/landingPage/LandingPageDto';
import Dependee from '../model/state2/Dependee';

class LandingPageMapperStatic {
    public toState = (dto: LandingPageXDto): LandingPageState => {
        const state = new LandingPageState();

        state.forms = dto.landing_pages.filter(page => !page.is_redirect_page).map(page => {
            let scraperUserAgent
                = dto.scraper_user_agent
                && dto.scraper_user_agent.filter(obj => obj.id == page.scraper_user_agent)[0];
          
            return {
                status: page.status, //TODO enum,
                name: page.name,
                url: page.url,
                isRedirectPage: page.is_redirect_page,
                pageType: page.page_type,
                path: page.path,
                scraperUserAgent: scraperUserAgent && { id: scraperUserAgent.id, label: scraperUserAgent.name },
                dateCreated:page.date_created,
                id: page.id,
                source: page.source
        }});

        state.dependencies = {
            scraperUserAgent:
                dto.scraper_user_agent 
                && dto.scraper_user_agent
                    .map(obj => ({ id: obj.id, label: obj.name })),    
        }

        //state.mode = 'ROOT';

        return state;
    }
    
    public toDto(form: LandingPageForm): LandingPageDto {
        return {
            "status": form.status,
            "name": form.name,
            "url": form.url,
            "is_redirect_page": form.isRedirectPage,
            "page_type": form.pageType,
            "path": form.path,
            "scraper_user_agent": form.scraperUserAgent && form.scraperUserAgent.id,
            "date_created": form.dateCreated,
            "id": form.id,
            source: form.source
        }
    }
}
const LandingPageMapper = new LandingPageMapperStatic();
export default LandingPageMapper;