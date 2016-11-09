import ScraperUserAgentDto from '../scraperUserAgent/ScraperUserAgentDto';
import RedirectPageDto from './RedirectPageDto';

class RedirectPageXDto {
    landing_pages: RedirectPageDto[] = [];
    scraper_user_agent: ScraperUserAgentDto[] = [];
}

export default RedirectPageXDto;

//https://sandbar-dev.rhino.lan/api/v1/redirect-pages/?include[]=scraper_user_agent.*