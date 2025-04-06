
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { PricingPage } from './pages/PricingPage'
import { Pipeline } from './components/Pipeline'
import { Toaster } from './components/ui/toaster'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/pipeline" element={<Pipeline />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App