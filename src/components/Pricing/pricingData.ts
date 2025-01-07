import { PricingTier } from './types';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Professional',
    price: 'Try for free',
    description: 'For businesses looking to get started with automation and streamline key operations.',
    features: [
      '24/7 Sales Assistant',
      '24/7 Customer Service Assistant',
      'Basic CRM Integration',
      'Cancel & pause anytime',
    ]
  },
  {
    name: 'Business',
    price: 'Try for free',
    description: 'For businesses ready to enhance customer engagement and scale operations efficiently.',
    isPopular: true,
    features: [
      '24/7 Sales Assistant',
      '24/7 Customer Service Assistant',
      'Custom CRM Integration',
      'Admin Automation',
      'Advanced Analytics'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For businesses seeking cutting-edge solutions to lead their industry.',
    features: [
      '24/7 Sales Assistant',
      '24/7 Customer Service Assistant',
      'Custom CRM Build',
      'Full Admin Automation',
      'Blockchain Integrations',
      'Analytics & ROI Optimization'
    ]
  }
];