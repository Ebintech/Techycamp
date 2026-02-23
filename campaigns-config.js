// ========================================
// 📂 GLOBAL CAMPAIGN CONFIGURATION (v12.2 - WINDOW FIXED)
// ========================================

const CAMPAIGNS = {
    // Bajaj Broking Campaign
    'bww4yubb': {
        id: 'bww4yubb',
        name: 'Baja Broking',
        slug: 'baja-broking',
        payout: 301,
        type: 'online',
        active: true,
        allowCustomPayout: false,
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹301 Rewards',
        offerUrl: 'https://vdeal.onelink.me/5SGo?pid=vdeal_int&af_siteid=3546&c=2706&af_sub1={clickid}&af_click_lookback=7d&clickid={clickid}',
        requiredFields: ['upi', 'mobile'],
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
        referralPayout: { referrer: 200, referee: 101 },
        secret: 'HizvggnR2H_BAJAJ_99'
    },

    // Angel One Campaign
    'c3bmdelk': {
        id: 'c3bmdelk',
        name: 'Angel One',
        slug: 'angel-one',
        payout: 500,
        type: 'online',
        active: false,
        allowCustomPayout: true,
        logo: 'https://campguruji.in/img/app-logo.png',
        description: 'Earn ₹500 Rewards',
        offerUrl: 'https://trk.opiclepxl.com/click?campaign_id=2557&pub_id=3546&source={clickid}&p1={clickid}',
        requiredFields: ['upi', 'mobile', 'name'],
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
        referralPayout: { referrer: 300, referee: 200 },
        secret: 'ANGEL_ONE_SECRET_77'
    },

    // Axis Mutual Fund Campaign
    'axismf01': {
        id: 'axismf01',
        name: 'axis',
        slug: 'axis',
        payout: 700,
        type: 'offline',
        active: true,
        allowCustomPayout: true,
        description: 'Earn ₹700 Cashback',
        offerUrl: 'https://bit.ly/axis-mf-invest',
        requiredFields: ['upi', 'mobile'],
        steps: [
            'Enter your UPI ID & Mobile And Submit.',
            'Complete Basic Details Email  Mobile, Pan Number Complete Basic Process.',
            'Then Choose Min Amount of ₹1000+or Above of Any SIP or Lumpsum.',
            'Complete Payment and Fill The Form',
            'Done ✅ You will Get Cashback within 3/4 Working Days.'
        ],
        terms: [
            'Valid once per user/UPI/IP/Device',
            'Only For New Users',
            'Verification takes 48-72 hours'
        ],
        referralPayout: { referrer: 700, referee: 200 },
        secret: 'AX_Axis_MF_Secure_01'
    },

    // Kalyan
    'kal': {
        id: 'kal',
        name: 'Kalyan',
        slug: 'kalyan',
        payout: 50,
        type: 'offline',
        active: true,
        allowCustomPayout: true,
        description: 'Earn ₹50 Cashback',
        offerUrl: 'https://trk.opiclepxl.com/click?campaign_id=2155&pub_id=3546&source={your-sub-aff-id}',
        requiredFields: ['upi'],
        steps: [
            'ONLY Female Registrations Will be paid',
            'Submit your UPI ID',
            'Complete Registration & Answer Company Call',
            'Get ₹50 cashback!'
        ],
        terms: [
            'ONLY Female Registration Will be paid',
            'Must answer the company call as interested',
            'Cashback after verification'
        ],
        referralPayout: { referrer: 35, referee: 50 },
        secret: 'KL_Kalyan_Secret_88'
    },

    'abcd_gold': {
        id: 'abcd_gold',
        name: 'ABCD Gold',
        slug: 'abcd-gold',
        payout: 25,
        type: 'online',
        active: true,
        allowCustomPayout: true,
        description: 'Earn ₹500 Cashback on Gold Purchase',
        offerUrl: 'https://trk.opiclepxl.com/click?campaign_id=2825&pub_id=3546&source={clickid}&p1={clickid}',
        statusFlow: {
            'default': 'App Installed',
            'dg_purchase_success_screen_load': 'Approved'
        },
        referralTrigger: 'dg_purchase_success_screen_load',
        requiredFields: ['upi'],
        steps: [
            'Submit UPI',
            'Install ABCD Gold App',
            'Buy Gold of ₹10+',
            'Get ₹500 Cashback'
        ],
        terms: [
            'Valid once per user/UPI/Device',
            'Min purchase ₹10 required'
        ],
        referralPayout: { referrer: 300, referee: 100 },
        secret: 'Gs82Jk91Xv4PqT2_ABCD'
    }
};

// --- 🌏 GLOBAL WINDOW ATTACHMENT (SAFEST FIX) ---

window.getCampaign = function (idOrSlug) {
    if (!idOrSlug) return null;
    const lower = idOrSlug.toLowerCase();
    if (CAMPAIGNS[lower]) return CAMPAIGNS[lower];
    return Object.values(CAMPAIGNS).find(c => c.slug === lower);
};

window.isCampaignActive = function (campaignId) {
    const campaign = CAMPAIGNS[campaignId];
    return campaign && campaign.active;
};

window.getActiveCampaigns = function () {
    return Object.values(CAMPAIGNS).filter(c => c.active);
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAMPAIGNS, getCampaign, isCampaignActive, getActiveCampaigns };
}
