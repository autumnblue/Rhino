import PagedDto from '../PagedDto'
import ShoalScrapeCredDto from './ShoalScrapeCredDto';
import ScraperUserAgentDto from '../scraperUserAgent/ScraperUserAgentDto';

interface ShoalScrapeCredXDto extends PagedDto {
    shoal_scrape_creds: ShoalScrapeCredDto[];
    scraper_user_agent: ScraperUserAgentDto[];
}

export default ShoalScrapeCredXDto;

