
import { Link } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { SignInNewWindow } from '../components/SignInNewWindow'

export function LandingPage() {
  const { isSignedIn } = useAuth()

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className="flex gap-x-6">
            <Link
              to="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pricing
            </Link>
            {isSignedIn ? (
              <Link
                to="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Dashboard <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <SignInNewWindow
                variant="ghost"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">→</span>
              </SignInNewWindow>
            )}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sales pipeline management made simple
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Track deals, manage contacts, and close more sales with our intuitive CRM platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {isSignedIn ? (
                <Link
                  to="/dashboard"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <SignInNewWindow className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Get started
                </SignInNewWindow>
              )}
              <Link to="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
                View pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}