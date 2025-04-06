
import { useState } from 'react'
import { SignInButton, useAuth } from '@clerk/clerk-react'
import { Check } from 'lucide-react'
import { CheckoutButton } from '../components/CheckoutButton'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    priceId: 'price_starter', // Replace with your actual Stripe price ID
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
    priceId: 'price_professional', // Replace with your actual Stripe price ID
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

export function PricingPage() {
  const { isSignedIn } = useAuth()
  const [billingInterval] = useState('monthly')

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that's packed with the best features for engaging your audience,
          creating customer loyalty, and driving sales.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`
                flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10
                ${tier.featured ? 'lg:z-10 lg:rounded-b-none' : ''}
                ${tierIdx === 0 ? 'lg:rounded-r-none' : ''}
                ${tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : ''}
              `}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={`text-lg font-semibold leading-8 ${
                      tier.featured ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  {tier.name !== 'Enterprise' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /{billingInterval}
                    </span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {isSignedIn ? (
                tier.priceId ? (
                  <CheckoutButton priceId={tier.priceId}>
                    <span className={`
                      w-full text-center
                      ${tier.featured ? 'text-white' : 'text-blue-600'}
                    `}>
                      Subscribe Now
                    </span>
                  </CheckoutButton>
                ) : (
                  <a
                    href="mailto:sales@company.com"
                    className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 bg-blue-50 text-blue-600 hover:bg-blue-100"
                  >
                    Contact Sales
                  </a>
                )
              ) : (
                <SignInButton mode="modal">
                  <button
                    className={`
                      mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                      ${
                        tier.featured
                          ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-600'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }
                    `}
                  >
                    Get Started
                  </button>
                </SignInButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}