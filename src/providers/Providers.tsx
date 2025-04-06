
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClerkProvider } from '@clerk/clerk-react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

export function Providers({ children }: { children: React.ReactNode }) {
  // Check for required environment variables
  const requiredEnvVars = {
    'Clerk Publishable Key': import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
    'Stripe Publishable Key': import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
  }

  // Check all required environment variables
  const missingEnvVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([name]) => name)

  if (missingEnvVars.length > 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full space-y-4 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Configuration Error</h2>
            <p className="text-gray-600 mb-4">
              Missing required environment variables:
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              {missingEnvVars.map((envVar) => (
                <li key={envVar} className="font-mono bg-gray-50 p-1 rounded">
                  {envVar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            {children}
            <Toaster position="top-right" expand={true} richColors />
          </Elements>
        </BrowserRouter>
      </QueryClientProvider>
    </ClerkProvider>
  )
}