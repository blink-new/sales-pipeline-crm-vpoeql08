
import { useState } from 'react'
import { SignInButton, useAuth } from '@clerk/clerk-react'
import { Check } from 'lucide-react'
import { CheckoutButton } from '../components/CheckoutButton'
import { cn } from '../lib/utils'

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

export function PricingPage() {
  const { isSignedIn } = useAuth()
  const [annual] = useState(false)

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that's packed with the best features for your business.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={cn(
                tier.featured ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={cn(
                      tier.featured ? 'text-indigo-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  {tier.priceId && <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {isSignedIn ? (
                tier.priceId ? (
                  <CheckoutButton
                    priceId={tier.priceId}
                    className={cn(
                      tier.featured
                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                      'mt-8'
                    )}
                  >
                    Get started today
                  </CheckoutButton>
                ) : (
                  <Button
                    className="mt-8"
                    variant="outline"
                    onClick={() => window.location.href = 'mailto:sales@company.com'}
                  >
                    Contact sales
                  </Button>
                )
              ) : (
                <SignInButton mode="modal">
                  <Button className="mt-8 w-full">
                    Sign in to subscribe
                  </Button>
                </SignInButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}