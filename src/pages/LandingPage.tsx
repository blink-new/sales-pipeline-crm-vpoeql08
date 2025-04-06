
import { SignUpButton, useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { 
  ArrowRight, 
  BarChart2, 
  CheckCircle2, 
  Globe2, 
  LayoutGrid, 
  MessagesSquare, 
  Rocket,
  Zap
} from 'lucide-react'

export function LandingPage() {
  const { isSignedIn } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Sales Pipeline,{' '}
              <span className="text-blue-600">Simplified</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Close more deals with our intuitive CRM. Built for modern sales teams that want to focus on selling, not data entry.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {isSignedIn ? (
                <Button 
                  size="lg"
                  onClick={() => navigate('/pipeline')}
                  className="group"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ) : (
                <SignUpButton mode="modal">
                  <Button size="lg" className="group">
                    Start Free Trial
                    <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </SignUpButton>
              )}
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/pricing')}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for modern sales teams
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by thousands of sales teams worldwide
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div
            className="ml-[max(50%-11rem,3.5rem)] aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-blue-600 to-purple-400 sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to transform your sales process?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of successful sales teams who have already streamlined their pipeline management.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {isSignedIn ? (
              <Button 
                size="lg" 
                onClick={() => navigate('/pipeline')}
                className="group"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            ) : (
              <SignUpButton mode="modal">
                <Button size="lg" className="group">
                  Start Free Trial
                  <Zap className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </SignUpButton>
            )}
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    name: 'Visual Pipeline',
    description: 'Drag-and-drop interface for easy deal management. See your entire sales process at a glance.',
    icon: LayoutGrid,
  },
  {
    name: 'Smart Analytics',
    description: 'Real-time insights and forecasting to help you make data-driven decisions.',
    icon: BarChart2,
  },
  {
    name: 'Team Collaboration',
    description: 'Built-in messaging and notifications keep everyone aligned and moving deals forward.',
    icon: MessagesSquare,
  },
  {
    name: 'Global Access',
    description: 'Access your pipeline from anywhere, on any device. Perfect for remote teams.',
    icon: Globe2,
  },
  {
    name: 'Automation',
    description: 'Automate repetitive tasks and focus on what matters - closing deals.',
    icon: Zap,
  },
  {
    name: 'Deal Tracking',
    description: 'Never miss a follow-up with automated reminders and deal progress tracking.',
    icon: CheckCircle2,
  },
]

const stats = [
  { id: 1, name: 'Active Users', value: '50,000+' },
  { id: 2, name: 'Deals Closed', value: '$2B+' },
  { id: 3, name: 'Time Saved', value: '15 hrs/week' },
  { id: 4, name: 'Customer Rating', value: '4.9/5' },
]

const footerLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]