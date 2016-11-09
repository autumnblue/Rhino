import ScraperUserAgentDto from '../scraperUserAgent/ScraperUserAgentDto';
import LandingPageDto from './LandingPageDto';

class LandingPageXDto {
    landing_pages: LandingPageDto[] = [];
    scraper_user_agent: ScraperUserAgentDto[] = [];
}

export default LandingPageXDto;

//https://sandbar-dev.rhino.lan/api/v1/redirect-pages/?include[]=scraper_user_agent.*