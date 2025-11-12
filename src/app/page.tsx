"use client"

import { useState, useEffect } from "react"
import WelcomePage from "@/components/pages/welcome-page"
import EventDetailsPage from "@/components/pages/event-details-page"
import ChiefGuestsPage from "@/components/pages/chief-guest-page"
import AppIntroPage from "@/components/pages/app-intro-page"
import DevelopersPage from "@/components/pages/developers-page"
import DownloadPage from "@/components/pages/download-page"
import Navigation from "@/components/navigation"
import BackgroundMusic from "@/components/background-music"

const PAGES = [
  { id: 0, component: WelcomePage },
  { id: 1, component: EventDetailsPage },
  { id: 2, component: ChiefGuestsPage },
  { id: 3, component: AppIntroPage },
  { id: 4, component: DevelopersPage },
  { id: 5, component: DownloadPage },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [autoAdvance, setAutoAdvance] = useState(true)

  useEffect(() => {
    if (!autoAdvance) return

    const timer = setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % PAGES.length)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentPage, autoAdvance])

  const CurrentPageComponent = PAGES[currentPage].component

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <BackgroundMusic />
      <CurrentPageComponent />
      <Navigation
        currentPage={currentPage}
        totalPages={PAGES.length}
        onPageChange={setCurrentPage}
        autoAdvance={autoAdvance}
        onAutoAdvanceToggle={setAutoAdvance}
      />
    </div>
  )
}
