"use client"

import { motion } from "framer-motion"

export function ApiFeatures() {
  return (
    <section id="api" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Developer API</h2>
          <p className="text-large text-muted max-w-2xl mx-auto">
            Integrate gaming events into your apps
          </p>
        </div>

        <div className="card-large text-center max-w-4xl mx-auto">
          <div className="text-5xl mb-6">🔗</div>
          <h3 className="heading-3 mb-6">Getting Started</h3>
          <p className="text-large text-muted mb-8">
            Integrate gaming events into your apps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <code className="text-sm text-primary-600 font-mono">GET /api/events</code>
              <p className="text-xs text-muted mt-2">All gaming events</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <code className="text-sm text-primary-600 font-mono">GET /api/games</code>
              <p className="text-xs text-muted mt-2">Game information</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
              <code className="text-sm text-primary-600 font-mono">GET /api/tournaments</code>
              <p className="text-xs text-muted mt-2">Tournament data</p>
            </div>
          </div>
          
          <a href="/docs" className="btn-primary mr-4">
            Documentation
          </a>
          <a href="https://github.com/gaba-dev-1/dropdate" target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
