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
    type: 'online', // online or offline
    active: true,
    logo: 'https://campguruji.in/img/app-logo.png',
    description: 'Earn ₹301 Rewards',
    offerUrl: 'https://track.panel.com/baja?offer=123',
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
    ]
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
    offerUrl: 'https://track.panel.com/angel?offer=456',
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
    ]
  },

  // Axis Mutual Fund Campaign
  'axismf01': {
    id: 'axismf01',
    name: 'Axis Mutual Fund',
    slug: 'axis-mf',
    payout: 500,
    type: 'offline',
    active: true,
    logo: 'https://campguruji.in/img/app-logo.png',
    description: 'Earn ₹500 Cashback',
    offerUrl: 'https://track.panel.com/axis?offer=789',
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
    ]
  },

  // Upstox Campaign
  'upstx001': {
    id: 'upstx001',
    name: 'Upstox',
    slug: 'upstox',
    payout: 400,
    type: 'online',
    active: true,
    logo: 'https://campguruji.in/img/app-logo.png',
    description: 'Earn ₹400 Rewards',
    offerUrl: 'https://track.panel.com/upstox?offer=999',
    steps: [
      'Submit your UPI ID above',
      'Download Upstox App',
      'Complete KYC with Aadhaar',
      'Activate your Demat account',
      'Make first trade',
      'Get ₹400 cashback within 48 hours!'
    ],
    terms: [
      'One submission per user only',
      'Valid Indian UPI required',
      'Complete KYC mandatory',
      'First trade must be completed'
    ]
  }
};

// Helper function to get campaign by ID
function getCampaign(campaignId) {
  return CAMPAIGNS[campaignId] || null;
}

// Helper function to check if campaign is active
function isCampaignActive(campaignId) {
  const campaign = CAMPAIGNS[campaignId];
  return campaign && campaign.active;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CAMPAIGNS, getCampaign, isCampaignActive };
}
