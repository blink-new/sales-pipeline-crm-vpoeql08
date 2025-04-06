
import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null> | null = null

export const getStripe = () => {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    if (!key) {
      throw new Error('Stripe publishable key is not set')
    }
    stripePromise = loadStripe(key)
  }
  return stripePromise
}