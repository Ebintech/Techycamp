// campaigns-config.js
// ========================================
// CAMPAIGNS CONFIGURATION DATABASE
// ========================================
const CAMPAIGNS = {
    // Baja Broking Campaign
    'bww4yubb': {
        id: 'bww4yubb',
        name: 'Baja Broking',
        slug: 'baja-broking',
        payout: 301,
        type: 'online',
        active: true,
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹301 Rewards',
        offerUrl: 'https://track.cpaguruji.com/click?offer_id=XXXXX&aff_id=YOUR_ID',
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
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹500 Rewards',
        offerUrl: 'https://track.cpaguruji.com/click?offer_id=XXXXX&aff_id=YOUR_ID',
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

    // Kalyan
    'kal': {
        id: 'kal',
        name: 'kalyan',
        slug: 'kalyan',
        payout: 55,
        type: 'offline',
        active: true,
        description: 'Earn ₹55 Cashback',
        offerUrl: 'https://track.cpaguruji.com/click?offer_id=XXXXX&aff_id=YOUR_ID',
        steps: [
            'Submit your UPI ID above',
            'Complete Registration',
            'You will get a call from the company talk as you are interested',
            'Done in 48-72 hours You will get ₹55 cashback!'
        ],
        terms: [
            'Valid once per user/UPI/IP/Device',
            'Must Be interested in profile',
            'Verification takes 48-72 hours'
        ],
        referralPayout: {
            referrer: 30,
            referee: 55
        }
    }
};

/**
 * Helper function to get campaign by ID
 * Attached to window object for maximum compatibility
 */
window.getCampaign = function(campaignId) {
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
    module.exports = { CAMPAIGNS, getCampaign: window.getCampaign, isCampaignActive, getActiveCampaigns };
}
