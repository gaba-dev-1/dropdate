"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { gameEvents, platforms, eventTypeStyles, type GameEvent } from "@/lib/gaming-data"
import { fetchGameData, type RAWGGame } from "@/lib/rawg-api"
import { formatDate, formatTime, getTimeUntil } from "@/lib/utils"

export function Calendar() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all")
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all")
  const [eventsToShow, setEventsToShow] = useState(12)
  
  const filteredEvents = useMemo(() => {
    let events = [...gameEvents].sort((a, b) => a.date.getTime() - b.date.getTime())
    
    if (selectedFilter !== "all") {
      events = events.filter(event => event.type === selectedFilter)
    }
    
    if (selectedPlatform !== "all") {
      events = events.filter(event => 
        event.platform.includes(selectedPlatform as any)
      )
    }
    
    return events
  }, [selectedFilter, selectedPlatform])

  useEffect(() => {
    setEventsToShow(12)
  }, [selectedFilter, selectedPlatform])

  const displayedEvents = filteredEvents.slice(0, eventsToShow)
  const hasMoreEvents = filteredEvents.length > eventsToShow
  const canShowLess = eventsToShow > 12

  const handleShowMore = () => {
    setEventsToShow(prev => Math.min(prev + 12, filteredEvents.length))
  }

  const handleShowLess = () => {
    setEventsToShow(prev => Math.max(prev - 12, 12))
  }

  const filters = [
    { id: "all", label: "All Events", icon: "🎯" },
    { id: "release", label: "Releases", icon: "🎮" },
    { id: "tournament", label: "Tournaments", icon: "🏆" },
    { id: "event", label: "Events", icon: "🎉" },
    { id: "dlc", label: "DLC", icon: "📦" },
    { id: "update", label: "Updates", icon: "🔄" },
  ]

  return (
    <section id="calendar" className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Events Lineup</h2>
          <p className="text-large text-muted max-w-2xl mx-auto">
            Browse {gameEvents.length} events including tournaments, releases, and community milestones
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`${
                  selectedFilter === filter.id ? "btn-primary" : "btn-secondary"
                } focus-ring flex items-center space-x-2`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
          
          <div className="flex justify-center">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 focus-ring dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            >
              <option value="all">All Platforms</option>
              {Object.entries(platforms).map(([key, platform]) => (
                <option key={key} value={key}>
                  {platform.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {displayedEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Show More/Less Controls */}
        {filteredEvents.length > 12 && (
          <div className="flex justify-center gap-4">
            {canShowLess && (
              <button
                onClick={handleShowLess}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all flex items-center justify-center focus-ring"
              >
                <span className="text-lg font-semibold">−</span>
              </button>
            )}
            
            {hasMoreEvents && (
              <button
                onClick={handleShowMore}
                className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-all flex items-center justify-center focus-ring"
              >
                <span className="text-lg font-semibold">+</span>
              </button>
            )}
          </div>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="heading-3 mb-4">No events found</h3>
            <p className="text-large text-muted">
              Try adjusting your filters
            </p>
          </div>
        )}

        {/* Enhanced Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-muted">
            <span>Showing {displayedEvents.length} of {filteredEvents.length} events</span>
            <span>•</span>
            <span>{gameEvents.filter(e => e.verified).length} verified</span>
            <span>•</span>
            <span>Updated daily</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, index }: { event: GameEvent; index: number }) {
  const [gameData, setGameData] = useState<RAWGGame | null>(null)
  const [imageError, setImageError] = useState(false)
  
  const timeUntil = getTimeUntil(event.date)
  const isPast = event.date < new Date()
  const eventStyle = eventTypeStyles[event.type]

  useEffect(() => {
    if (event.rawgSlug) {
      fetchGameData(event.rawgSlug).then(setGameData)
    }
  }, [event.rawgSlug])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="card-interactive card-medium overflow-hidden"
    >
      {/* Game Image */}
      {gameData?.background_image && !imageError && (
        <div className="relative h-48 mb-6 -mx-4 lg:-mx-6 -mt-4 lg:-mt-6 overflow-hidden">
          <Image
            src={gameData.background_image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Event Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`badge text-white ${eventStyle.color} shadow-medium`}>
              <span className="mr-1">{eventStyle.icon}</span>
              {eventStyle.label}
            </span>
          </div>

          {/* Rating */}
          {gameData.rating > 0 && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium">
              ⭐ {gameData.rating.toFixed(1)}
            </div>
          )}
        </div>
      )}

      {/* Header (if no image) */}
      {(!gameData?.background_image || imageError) && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{eventStyle.icon}</span>
            <span className={`badge text-white ${eventStyle.color}`}>
              {eventStyle.label}
            </span>
          </div>
          
          {gameData?.rating && (
            <div className="text-sm text-muted">
              ⭐ {gameData.rating.toFixed(1)}
            </div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="heading-4 hover:text-primary-600 transition-colors">
            {event.title}
          </h3>
          <div className="text-right text-sm">
            <div className="font-semibold text-gray-900 dark:text-white">
              {formatDate(event.date)}
            </div>
            <div className="text-muted">
              {formatTime(event.date)}
            </div>
          </div>
        </div>
        
        <p className="text-muted text-sm leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Tournament Details */}
        {event.prizePool && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              💰 {event.prizePool}
            </span>
            {event.participants && (
              <span className="badge-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                👥 {event.participants}
              </span>
            )}
            {event.location && (
              <span className="badge-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                📍 {event.location}
              </span>
            )}
          </div>
        )}

        {/* Metacritic Score */}
        {gameData?.metacritic && (
          <div className="mb-4">
            <span className="badge-sm bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              Metacritic: {gameData.metacritic}
            </span>
          </div>
        )}
      </div>
      
      {/* Platforms */}
      <div className="flex flex-wrap gap-2 mb-6">
        {event.platform.map((platform) => (
          <span
            key={platform}
            className={`badge-sm ${platforms[platform]?.color}`}
          >
            {platform}
          </span>
        ))}
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-sm font-medium text-muted">
          {event.game}
        </div>
        
        <div className="flex items-center space-x-3">
          {event.verified && (
            <span className="text-accent-600 text-lg" title="Verified">✓</span>
          )}
          <span className={`badge-sm ${
            isPast 
              ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" 
              : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          }`}>
            {isPast ? "Past" : timeUntil}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
