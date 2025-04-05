
import { Link } from 'react-router-dom'
import { SignInButton, useAuth } from '@clerk/clerk-react'

export function LandingPage() {
  const { isSignedIn } = useAuth()

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="" />
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            {isSignedIn ? (
              <Link
                to="/pipeline"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Go to Dashboard <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : (
              <SignInButton mode="modal">
                <button
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </button>
              </SignInButton>
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
                  to="/pipeline"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <button
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started
                  </button>
                </SignInButton>
              )}
              <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}