import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <div className="pointer-events-none fixed inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative">
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
