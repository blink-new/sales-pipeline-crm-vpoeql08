
import { useState } from 'react'
import { Button } from './ui/button'
import { getStripe } from '../lib/stripe'
import { useToast } from '../hooks/use-toast'

interface CheckoutButtonProps {
  priceId: string
  children: React.ReactNode
  className?: string
}

export function CheckoutButton({ priceId, children, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const stripe = await getStripe()
      
      if (!stripe) {
        throw new Error('Failed to initialize Stripe')
      }

      // Redirect to Checkout
      const { error } = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription', // Changed to subscription mode
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/pricing`,
      })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Error',
        description: 'Failed to start checkout process. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      onClick={handleCheckout}
      disabled={loading}
      className={`mt-8 w-full ${className}`}
      variant={loading ? 'outline' : 'default'}
    >
      {loading ? 'Loading...' : children}
    </Button>
  )
}