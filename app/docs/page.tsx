import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function Documentation() {
  return (
    <>
      <Header />
      <main className="relative pt-20 pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <a href="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                ← Back to Dropdate
              </a>
            </nav>
            
            <div className="text-center mb-12">
              <h1 className="heading-1 mb-6">API Documentation</h1>
              <p className="text-large text-muted">
                Simple REST API for gaming events data
              </p>
            </div>

            <div className="space-y-12">
              <div className="card-large">
                <h2 className="heading-3 mb-6">Quick Start</h2>
                <div className="bg-gray-900 text-green-400 p-6 rounded-xl mb-4">
                  <pre className="text-sm">
{`curl https://dropdate.net/api/events

{
  "events": [
    {
      "id": "1",
      "title": "League of Legends World Championship",
      "game": "League of Legends",
      "type": "tournament",
      "date": "2025-10-01T00:00:00Z",
      "platform": ["PC"],
      "prizePool": "$5,000,000",
      "verified": true
    }
  ]
}`}
                  </pre>
                </div>
              </div>

              <div className="card-large">
                <h2 className="heading-3 mb-6">Endpoints</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="heading-4 mb-3">GET /api/events</h3>
                    <p className="text-muted mb-3">Fetch all gaming events with optional filters</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">?type=tournament&platform=PC&limit=10</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-4 mb-3">GET /api/games</h3>
                    <p className="text-muted mb-3">Game information with RAWG integration</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">?slug=cyberpunk-2077</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="heading-4 mb-3">GET /api/tournaments</h3>
                    <p className="text-muted mb-3">Tournament-specific data with prize pools</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-sm">?upcoming=true&verified=true</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-large">
                <h2 className="heading-3 mb-6">Response Format</h2>
                <p className="text-muted mb-4">All responses return JSON with consistent structure:</p>
                <div className="bg-gray-900 text-green-400 p-6 rounded-xl">
                  <pre className="text-sm">
{`{
  "data": [...],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10
  }
}`}
                  </pre>
                </div>
              </div>

              <div className="card-large">
                <h2 className="heading-3 mb-6">Rate Limits</h2>
                <p className="text-muted">
                  Free tier: 1000 requests/hour • No authentication required • CORS enabled
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
