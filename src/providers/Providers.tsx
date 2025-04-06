
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClerkProvider } from '@clerk/clerk-react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            {children}
          </Elements>
        </BrowserRouter>
      </QueryClientProvider>
    </ClerkProvider>
  )
}