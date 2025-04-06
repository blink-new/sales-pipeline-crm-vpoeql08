
import { useState } from 'react'
import { SignInButton, useAuth } from '@clerk/clerk-react'
import { Check } from 'lucide-react'
import { CheckoutButton } from '../components/CheckoutButton'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    priceId: import.meta.env.VITE_STRIPE_STARTER_PRICE_ID,
    priceMonthly: '$29',
    description: 'Perfect for small teams getting started.',
    features: [
      'Up to 5 team members',
      'Basic pipeline management',
      'Contact management',
      'Email integration',
      'Basic analytics',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    priceId: import.meta.env.VITE_STRIPE_PRO_PRICE_ID,
    priceMonthly: '$99',
    description: 'For growing teams that need more.',
    features: [
      'Up to 20 team members',
      'Advanced pipeline customization',
      'Advanced analytics',
      'API access',
      'Priority support',
      'Custom fields',
      'Automation workflows',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    priceId: null, // Enterprise is contact sales
    priceMonthly: 'Custom',
    description: 'Dedicated support and infrastructure.',
    features: [
      'Unlimited team members',
      'Advanced security',
      'Custom integrations',
      'Dedicated support',
      'SLA',
      'Custom contract',
    ],
    featured: false,
  },
]

// Rest of the component stays the same...