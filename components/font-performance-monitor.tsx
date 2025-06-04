"use client"

import { useEffect } from "react"

// Type definitions for performance entries
interface LCPEntry extends PerformanceEntry {
    element?: Element
    size: number
    loadTime: number
}

interface LayoutShiftEntry extends PerformanceEntry {
    hadRecentInput?: boolean
    value: number
    sources?: Array<{
        node?: Node
        currentRect: DOMRectReadOnly
        previousRect: DOMRectReadOnly
    }>
}

export default function FontPerformanceMonitor() {
    useEffect(() => {
        if (typeof window === "undefined") return

        // Monitor font loading performance
        if ("fonts" in document) {
            // Track when fonts start loading
            const fontLoadStart = performance.now()

            document.fonts.ready.then(() => {
                const fontLoadEnd = performance.now()
                const fontLoadTime = fontLoadEnd - fontLoadStart

                console.log(`Fonts loaded in ${fontLoadTime.toFixed(2)}ms`)

                // Dispatch custom event when fonts are ready
                window.dispatchEvent(
                    new CustomEvent("fontsLoaded", {
                        detail: { loadTime: fontLoadTime },
                    }),
                )
            })

            // Monitor individual font loading
            document.fonts.addEventListener("loadingdone", (event) => {
                console.log("Font loading done:", event)
            })

            document.fonts.addEventListener("loadingerror", (event) => {
                console.error("Font loading error:", event)
            })
        }

        // Monitor LCP performance
        if ("PerformanceObserver" in window) {
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                entries.forEach((entry) => {
                    if (entry.entryType === "largest-contentful-paint") {
                        const lcpEntry = entry as LCPEntry
                        console.log(`LCP: ${lcpEntry.startTime.toFixed(2)}ms`)

                        // Log if LCP element contains text
                        if (lcpEntry.element && lcpEntry.element.textContent) {
                            console.log("LCP element contains text:", lcpEntry.element.tagName)
                        }
                    }
                })
            })

            lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

            // Monitor CLS (Cumulative Layout Shift)
            const clsObserver = new PerformanceObserver((list) => {
                let clsValue = 0
                const entries = list.getEntries()

                entries.forEach((entry) => {
                    if (entry.entryType === "layout-shift") {
                        const layoutShiftEntry = entry as LayoutShiftEntry
                        if (!layoutShiftEntry.hadRecentInput) {
                            clsValue += layoutShiftEntry.value
                        }
                    }
                })

                if (clsValue > 0) {
                    console.log(`CLS: ${clsValue.toFixed(4)}`)
                }
            })

            clsObserver.observe({ entryTypes: ["layout-shift"] })

            return () => {
                lcpObserver.disconnect()
                clsObserver.disconnect()
            }
        }
    }, [])

    return null
}
