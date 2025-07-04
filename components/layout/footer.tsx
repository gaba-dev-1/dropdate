"use client"

import Link from "next/link"

const DropdateLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Simple DD design */}
    <rect width="48" height="48" rx="8" fill="#3B82F6"/>
    
    {/* First D */}
    <path
      d="M8 12C8 10.8954 8.89543 10 10 10H18C23.5228 10 28 14.4772 28 20V28C28 33.5228 23.5228 38 18 38H10C8.89543 38 8 37.1046 8 36V12Z"
      fill="white"
    />
    <path
      d="M12 16C12 15.4477 12.4477 15 13 15H17C19.7614 15 22 17.2386 22 20V28C22 30.7614 19.7614 33 17 33H13C12.4477 33 12 32.5523 12 32V16Z"
      fill="#3B82F6"
    />
    
    {/* Second D */}
    <path
      d="M20 12C20 10.8954 20.8954 10 22 10H30C35.5228 10 40 14.4772 40 20V28C40 33.5228 35.5228 38 30 38H22C20.8954 38 20 37.1046 20 36V12Z"
      fill="white"
    />
    <path
      d="M24 16C24 15.4477 24.4477 15 25 15H29C31.7614 15 34 17.2386 34 20V28C34 30.7614 31.7614 33 29 33H25C24.4477 33 24 32.5523 24 32V16Z"
      fill="#3B82F6"
    />
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const links = {
    product: [
      { name: "Calendar", href: "#calendar" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "/docs" },
    ],
    community: [
      { name: "GitHub", href: "https://github.com/gaba-dev-1/dropdate" },
      { name: "Issues", href: "https://github.com/gaba-dev-1/dropdate/issues" },
      { name: "Contribute", href: "https://github.com/gaba-dev-1/dropdate" },
    ],
    legal: [
      { name: "Terms & Privacy", href: "/legal" },
      { name: "CC0 License", href: "https://creativecommons.org/public-domain/cc0/" },
      { name: "Open Source", href: "https://github.com/gaba-dev-1/dropdate" },
    ]
  }

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <DropdateLogo className="w-8 h-8" />
              <span className="text-xl font-bold text-primary-600">
                Dropdate
              </span>
            </div>
            <p className="text-muted text-sm">
              Your complete gaming calendar with tournament tracking and game previews.
            </p>
          </div>
          
          {Object.entries(links).map(([category, categoryLinks]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                {category === 'legal' ? 'Legal' : category}
              </h3>
              <ul className="space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('http') ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="text-muted hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted">
            <p>&copy; {currentYear} Dropdate. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made for gamers worldwide 🎮</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
