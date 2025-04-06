
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { PricingPage } from './pages/PricingPage'
import { Pipeline } from './pages/Pipeline'
import { Toaster } from './components/ui/toaster'
import { useState } from 'react'

// Get the Clerk publishable key from environment variable
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/pipeline" element={<Pipeline />} />
          </Routes>
        </div>
        <Toaster />
      </Router>
    </ClerkProvider>
  )
}