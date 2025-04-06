
import { SignUpButton, useAuth } from '@clerk/clerk-react'
import { Check, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    price: { monthly: '$15', annually: '$12' },
    description: 'Perfect for individuals and small teams just getting started.',
    features: [
      'Up to 20 active deals',
      'Basic pipeline management',
      'Email integration',
      'Mobile app access',
      'Basic reporting',
    ],
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    price: { monthly: '$30', annually: '$25' },
    description: 'Ideal for growing teams needing more power.',
    features: [
      'Unlimited active deals',
      'Advanced pipeline customization',
      'AI-powered insights',
      'Team collaboration tools',
      'Advanced analytics',
      'Priority support',
      'Custom fields',
      'API access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$60', annually: '$50' },
    description: 'Advanced features for large teams and organizations.',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Advanced security',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantees',
      'Custom training',
      'Advanced permissions',
    ],
  },
]

export function PricingPage() {
  const { isSignedIn } = useAuth()
  const [annual, setAnnual] = useState(true)

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background gradient effect */}
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-600 to-purple-400 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center gap-x-4">
            <span className={`text-sm ${!annual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                annual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  annual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Annual billing
              <span className="ml-2 text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs font-medium">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.featured
                  ? 'bg-gray-900 ring-gray-900 lg:z-10 lg:rounded-b-none'
                  : 'bg-white'
              }`}
            >
              <h3
                className={`text-lg font-semibold leading-8 ${
                  tier.featured ? 'text-white' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              <p className={`mt-4 text-sm leading-6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.featured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {annual ? tier.price.annually : tier.price.monthly}
                </span>
                <span className={`text-sm font-semibold leading-6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  /month
                </span>
              </p>
              {isSignedIn ? (
                <Button
                  variant={tier.featured ? 'default' : 'outline'}
                  className={`mt-6 w-full ${
                    tier.featured
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Upgrade to {tier.name}
                  {tier.featured && <Zap className="ml-2 h-4 w-4" />}
                </Button>
              ) : (
                <SignUpButton mode="modal">
                  <Button
                    variant={tier.featured ? 'default' : 'outline'}
                    className={`mt-6 w-full ${
                      tier.featured
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    Get started
                    {tier.featured && <Zap className="ml-2 h-4 w-4" />}
                  </Button>
                </SignUpButton>
              )}
              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.featured ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.featured ? 'text-white' : 'text-blue-600'
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-2xl mt-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: 'How does the 14-day trial work?',
    answer: 'You can try any plan free for 14 days. No credit card required. Cancel anytime.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.',
  },
  {
    question: 'Is there a discount for non-profits?',
    answer: 'Yes, we offer special pricing for non-profit organizations. Contact our sales team for details.',
  },
]