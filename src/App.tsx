
import { useAuth } from '@clerk/clerk-react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout'
import { LandingPage } from './pages/LandingPage'
import { PricingPage } from './pages/PricingPage'
import { Pipeline } from './components/Pipeline'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth()
  const location = useLocation()

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isSignedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<PricingPage />} />

      {/* Protected dashboard routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="pipeline" replace />} />
        <Route path="pipeline" element={<Pipeline />} />
        <Route path="contacts" element={<div>Contacts (Coming Soon)</div>} />
        <Route path="companies" element={<div>Companies (Coming Soon)</div>} />
        <Route path="analytics" element={<div>Analytics (Coming Soon)</div>} />
        <Route path="settings" element={<div>Settings (Coming Soon)</div>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App