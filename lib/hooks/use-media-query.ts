"use client"

import { useState, useEffect } from 'react'

/**
 * Custom hook for detecting media query changes
 * 
 * @param query - CSS media query string (e.g. '(max-width: 640px)')
 * @returns boolean indicating whether the media query matches
 */
export const useMediaQuery = (query: string): boolean => {
    // Default to false on the server or during initial client render
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        // Skip if running on the server
        if (typeof window === 'undefined') return

        // Create a media query list
        const media = window.matchMedia(query)

        // Update matches state based on media query result
        const updateMatches = () => {
            setMatches(media.matches)
        }

        // Set initial value
        updateMatches()

        // Add listener for changes
        // Using addEventListener for modern browsers
        media.addEventListener('change', updateMatches)

        // Clean up
        return () => {
            media.removeEventListener('change', updateMatches)
        }
    }, [query])

    return matches
}
