"use client"

import { motion } from "framer-motion"
import { gameEvents } from "@/lib/gaming-data"

export function Hero() {
  const tournamentCount = gameEvents.filter(event => event.type === 'tournament').length;
  const releaseCount = gameEvents.filter(event => event.type === 'release').length;
  const totalEvents = gameEvents.length;

  return (
    <section className="relative pt-40 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <h1 className="heading-1 mb-8">
              Gaming Calendar
              <br />
              <span className="text-primary-600">
                Made Simple
              </span>
            </h1>
            
            <p className="text-large text-muted max-w-3xl mx-auto mb-10">
              Track releases, tournaments, and community events with detailed filtering & previews in a single place.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#calendar" className="btn-primary text-lg px-10 py-4">
              Browse Events
            </a>
            <a href="/docs" className="btn-outline text-lg px-10 py-4">
              Developer API
            </a>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{totalEvents}</div>
              <div className="text-base text-muted">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">{releaseCount}</div>
              <div className="text-base text-muted">Releases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{tournamentCount}</div>
              <div className="text-base text-muted">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-base text-muted">Updates</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
