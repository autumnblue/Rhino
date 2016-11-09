import RedirectPageState from '../model/state2/redirectPage/RedirectPageState';
import RedirectPageForm from '../model/state2/redirectPage/RedirectPageForm';
import RedirectPageXDto from '../model/dto2/redirectPage/RedirectPageXDto';
import RedirectPageDto from '../model/dto2/redirectPage/RedirectPageDto';
import Dependee from '../model/state2/Dependee';

class RedirectPageMapperStatic {
    public toState = (dto: RedirectPageXDto): RedirectPageState => {
        const state = new RedirectPageState();

        state.forms = dto.landing_pages.map(page => {
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
    
    public toDto(form: RedirectPageForm): RedirectPageDto {
        return {
            "status": form.status,
            "name": form.name,
            "url": form.url,
            "is_redirect_page": form.isRedirectPage,
            "page_type": form.pageType,
            "path": form.path,
            "scraper_user_agent": form.scraperUserAgent && form.scraperUserAgent.id,
            "date_created": form.dateCreated,
            "id": form.id
        }
    }
}
const RedirectPageMapper = new RedirectPageMapperStatic();
export default RedirectPageMapper;