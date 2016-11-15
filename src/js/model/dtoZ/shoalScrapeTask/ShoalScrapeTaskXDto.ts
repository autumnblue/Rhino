import PagedDto from '../PagedDto'
import ShoalScrapeCredDto from '../shoalScrapeCred/ShoalScrapeCredDto';
import ShoalScrapeTaskDto from './ShoalScrapeTaskDto';

interface ShoalScrapeTaskXDto extends PagedDto {
    scraper_scrape_task: ShoalScrapeTaskDto[];
    shoal_scrape_creds: ShoalScrapeCredDto[];
}

export default ShoalScrapeTaskXDto;

