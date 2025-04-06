
import { useState } from 'react'
import { Button } from './ui/button'
import { getStripe } from '../lib/stripe'

interface CheckoutButtonProps {
  priceId: string
  children: React.ReactNode
}

export function CheckoutButton({ priceId, children }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const stripe = await getStripe()
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize')
      }

      // Redirect to Checkout
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/canceled`,
      })

      if (error) {
        console.error('Error:', error)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? 'Loading...' : children}
    </Button>
  )
}