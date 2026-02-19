// campaigns-config.js
// ========================================
// CAMPAIGNS CONFIGURATION DATABASE
// ========================================
// Note: Add 'allowCustomPayout: false' inside any campaign 
// to disable reward customization for that specific offer.
const CAMPAIGNS = {
    // Baja Broking Campaign
    'bww4yubb': {
        id: 'bww4yubb',
        name: 'Baja Broking',
        slug: 'baja-broking',
        payout: 301,
        type: 'online',
        active: false,
        allowCustomPayout: false, // Set to false to lock rewards
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹301 Rewards',
        offerUrl: 'https://track.cpaguruji.com/click?offer_id=XXXXX&aff_id=YOUR_ID',
        requiredFields: ['upi', 'mobile'], // Default fields
        steps: [
            'Submit your UPI ID above',
            'Download & Install the Baja Broking App',
            'Complete KYC using Aadhaar & PAN card',
            'Deposit minimum ₹150 in your account',
            'Complete your first trade (Buy/Sell any stock)',
            'Get ₹301 cashback within 24-48 hours!'
        ],
        terms: [
            'Offer valid only once per user/UPI ID/IP address and Device',
            'Use only Real Indian Mobile Numbers and genuine UPI ID',
            'Email ID must match your KYC name for cashback eligibility',
            'Payment Banks & Small Finance Banks not allowed',
            'Merchant verifies all transactions for duplicate/fraudulent activity',
            'Cashback credited after successful first trade completion',
            'Any suspicious activity will result in reward rejection'
        ],
        referralPayout: {
            referrer: 200,
            referee: 101
        }
    },

    // Angel One Campaign
    'c3bmdelk': {
        id: 'c3bmdelk',
        name: 'Angel One',
        slug: 'angel-one',
        payout: 500,
        type: 'online',
        active: true,
        allowCustomPayout: true, // Set to false to lock rewards
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹500 Rewards',
        offerUrl: 'https://track.cpaguruji.com/click?offer_id=XXXXX&aff_id=YOUR_ID',
        requiredFields: ['upi', 'mobile', 'name'], // Example with Name
        steps: [
            'Submit your UPI ID above',
            'Download & Install Angel One App',
            'Complete KYC verification',
            'Add minimum ₹100 to wallet',
            'Complete your first trade',
            'Get ₹500 cashback within 24-48 hours!'
        ],
        terms: [
            'Valid once per user/UPI/IP/Device',
            'Use genuine Indian mobile number',
            'Complete KYC within 7 days',
            'Minimum deposit ₹100 required',
            'Cashback after first trade completion'
        ],
        referralPayout: {
            referrer: 300,
            referee: 200
        }
    },

    // Axis Mutual Fund Campaign
    'axismf01': {
        id: 'axismf01',
        name: 'Axis Mutual Fund',
        slug: 'axis-mf',
        payout: 500,
        type: 'offline',
        active: true,
        allowCustomPayout: true, // Set to false to lock rewards
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹500 Cashback',
        offerUrl: 'https://track.cpaguruji.com/click?offer_id=XXXXX&aff_id=YOUR_ID',
        requiredFields: ['upi'], // Minimum fields
        steps: [
            'Submit your UPI ID above',
            'Complete KYC verification',
            'Invest minimum ₹5000 in any fund',
            'Wait 48-72 hours for merchant verification',
            'Get ₹500 cashback automatically!'
        ],
        terms: [
            'Valid once per user/UPI/IP/Device',
            'Minimum investment ₹5000',
            'KYC must be completed',
            'Verification takes 48-72 hours'
        ],
        referralPayout: {
            referrer: 300,
            referee: 200
        }
    },

    // Kalyan
    'kal': {
        id: 'kal',
        name: 'Kalyan',
        slug: 'kalyan',
        payout: 50,
        type: 'offline',
        active: false,
        allowCustomPayout: false, // Set to false to lock rewards
        description: 'Earn ₹50 Cashback',
        offerUrl: 'https://trk.opiclepxl.com/click?campaign_id=2155&pub_id=3546&source={your-sub-aff-id}',
        requiredFields: ['upi'],
        steps: [
            'Submit your UPI ID above',
            'Complete Registration',
            'You will get a call from the company talk as you are interested',
            'Done in 48-72 hours You will get ₹50 cashback!'
        ],
        terms: [
            'Valid once per user/UPI/IP/Device',
            'Complete registration with real details',
            'Must answer the company call as interested',
            'Cashback after verification (48-72 hours)'
        ],
        referralPayout: {
            referrer: 35,
            referee: 50
        }
    }
};

// Helper function to get campaign by ID
window.getCampaign = function (campaignId) {
    if (typeof CAMPAIGNS !== 'undefined' && CAMPAIGNS[campaignId]) {
        return CAMPAIGNS[campaignId];
    }
    return null;
};

// Helper function to check if campaign is active
function isCampaignActive(campaignId) {
    const campaign = CAMPAIGNS[campaignId];
    return campaign && campaign.active;
}

// Helper function to get all active campaigns
function getActiveCampaigns() {
    return Object.values(CAMPAIGNS).filter(c => c.active);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAMPAIGNS, getCampaign, isCampaignActive, getActiveCampaigns };
}
