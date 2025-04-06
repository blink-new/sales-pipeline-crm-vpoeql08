
import { useClerk } from '@clerk/clerk-react'
import { type ButtonHTMLAttributes } from 'react'
import { Button } from './ui/button'

interface SignInNewWindowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  className?: string
}

export function SignInNewWindow({ children, variant = 'default', className, ...props }: SignInNewWindowProps) {
  const { openSignIn } = useClerk()

  const handleSignIn = () => {
    openSignIn({
      appearance: {
        elements: {
          rootBox: {
            width: '480px',
            height: '600px',
          }
        }
      },
      afterSignInUrl: window.location.href,
      afterSignUpUrl: window.location.href,
    })
  }

  return (
    <Button 
      onClick={handleSignIn} 
      variant={variant} 
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}