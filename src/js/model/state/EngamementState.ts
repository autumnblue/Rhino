class EngagementState {
    form: Engagement;

    list: Engagement[];
    
    dependencies: {
        // 'landing_page',
        // 'domain',
        // 'campaign',
        // 'email_template',
        // 'redirect_page'
        campaign: { id: number, name: string }
    }
    //https://sandbar-dev.rhino.lan/api/v1/engagements/?include[]=landing_page.*&include[]=domain.*&include[]=campaign.*&include[]=email_template.*&include=interval.*&include[]=redirect_page.*
}

interface Campaign { id: number, name: string }
interface Schedule { id: number, name: string }

interface Engagement {
    id: number,
    campaign: {
        id: number
        name: string
    }
    title: string,
    description: string,
    landingPageUrl: {
        id: number
        url: string
    },
    schedule: {
        id: number
        name: string
    },
    emailServer: {
        id: number
        name: string
    },
    emailTemplate: {
        id: number,
        name: string
    },
    landingPage: {
        id: number,
        name: string
    },
    redirectPage: {
        id: number,
        name: string
    }
}