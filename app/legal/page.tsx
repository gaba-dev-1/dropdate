import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function Legal() {
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
              <h1 className="heading-1 mb-6">Terms & Privacy</h1>
              <p className="text-large text-muted">
                Simple, clear policies for using Dropdate
              </p>
            </div>

            <div className="space-y-12">
              <div className="card-large">
                <h2 className="heading-3 mb-6">Terms of Use</h2>
                <div className="space-y-4 text-muted">
                  <p>
                    Dropdate is provided "as is" under CC0 license. You can use, modify, 
                    and distribute this project freely without attribution.
                  </p>
                  <p>
                    <strong>What you can do:</strong> Use the API, copy the code, fork the project, 
                    build commercial applications, contribute to development.
                  </p>
                  <p>
                    <strong>What we ask:</strong> Don't abuse the API with excessive requests, 
                    don't use it for spam or illegal activities.
                  </p>
                </div>
              </div>

              <div className="card-large">
                <h2 className="heading-3 mb-6">Privacy Policy</h2>
                <div className="space-y-4 text-muted">
                  <p>
                    <strong>We collect:</strong> Basic usage analytics (anonymous), error logs for debugging.
                  </p>
                  <p>
                    <strong>We don't collect:</strong> Personal information, IP addresses, user accounts, 
                    tracking cookies, or any identifiable data.
                  </p>
                  <p>
                    <strong>Data storage:</strong> All data is public gaming events information. 
                    No user data is stored or processed.
                  </p>
                  <p>
                    <strong>Third parties:</strong> We use RAWG API for game data. No data is shared 
                    with advertisers or analytics companies.
                  </p>
                </div>
              </div>

              <div className="card-large">
                <h2 className="heading-3 mb-6">Open Source</h2>
                <div className="space-y-4 text-muted">
                  <p>
                    Dropdate is fully open source under CC0 license. This means you can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the code commercially</li>
                    <li>Modify and redistribute</li>
                    <li>Remove attribution</li>
                    <li>Create derivative works</li>
                  </ul>
                  <p>
                    View source: <a href="https://github.com/gaba-dev-1/dropdate" className="text-primary-600 hover:text-primary-700">github.com/gaba-dev-1/dropdate</a>
                  </p>
                </div>
              </div>

              <div className="card-large">
                <h2 className="heading-3 mb-6">Contact</h2>
                <p className="text-muted">
                  Questions? Open an issue on GitHub or contribute to the project. 
                  This is a community-driven project.
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
