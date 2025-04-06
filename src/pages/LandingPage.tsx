
import { Link } from 'react-router-dom'
import { SignInButton, useAuth } from '@clerk/clerk-react'
import { BarChart3, Users2, Zap, Target, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Visual Pipeline',
    description: 'Drag-and-drop deal management with intuitive kanban board.',
    icon: BarChart3,
  },
  {
    name: 'Contact Management',
    description: 'Keep track of all your contacts and their interactions.',
    icon: Users2,
  },
  {
    name: 'Quick Actions',
    description: 'Take action fast with our streamlined interface.',
    icon: Zap,
  },
  {
    name: 'Sales Analytics',
    description: 'Make data-driven decisions with powerful insights.',
    icon: Target,
  },
]

const testimonials = [
  {
    quote: "This CRM has transformed how we manage our sales pipeline. It's intuitive and powerful.",
    author: "Sarah Johnson",
    role: "Sales Director, TechCorp"
  },
  {
    quote: "The visual pipeline makes it so easy to track deals. We've increased our close rate by 40%.",
    author: "Michael Chen",
    role: "VP Sales, GrowthCo"
  },
]

export function LandingPage() {
  const { isSignedIn } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PipelinePro</span>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                PipelinePro
              </div>
            </Link>
          </div>
          <div className="flex gap-x-8 items-center">
            <Link
              to="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>
            {isSignedIn ? (
              <Link
                to="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Dashboard <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <SignInButton mode="popup">
                <button
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Log in <span aria-hidden="true">→</span>
                </button>
              </SignInButton>
            )}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Sales pipeline management
                <span className="block text-blue-600">made simple</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Track deals, manage contacts, and close more sales with our intuitive CRM platform.
                Built for modern sales teams who want to focus on selling, not admin work.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {isSignedIn ? (
                  <Link
                    to="/dashboard"
                    className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-200"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <SignInButton mode="popup">
                    <button
                      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-200 flex items-center gap-2"
                    >
                      Get started <ArrowRight className="w-4 h-4" />
                    </button>
                  </SignInButton>
                )}
                <Link 
                  to="/pricing" 
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-1"
                >
                  View pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Everything you need</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Powerful features for modern sales teams
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                  <motion.div 
                    key={feature.name}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-24 sm:py-32 bg-blue-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Loved by sales teams everywhere
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
                >
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.quote}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link to="/pricing" className="text-gray-400 hover:text-gray-500">
                Pricing
              </Link>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Privacy
              </a>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; 2024 PipelinePro. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}