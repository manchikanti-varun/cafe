// Font optimization utilities

export const fontLoadingStrategy = {
    // Preload critical fonts with high priority
    preloadCriticalFonts: () => {
        if (typeof window === "undefined") return

        const criticalFonts = [
            {
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                as: "style",
            },
            {
                href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap",
                as: "style",
            },
        ]

        criticalFonts.forEach(({ href, as }) => {
            const link = document.createElement("link")
            link.rel = "preload"
            link.as = as
            link.href = href
            link.crossOrigin = "anonymous"
            link.onload = () => {
                link.rel = "stylesheet"
            }
            document.head.appendChild(link)
        })
    },

    // Monitor font loading with performance tracking
    monitorFontLoading: () => {
        if (typeof window === "undefined" || !("fonts" in document)) return

        const startTime = performance.now()

        return new Promise((resolve) => {
            if (document.fonts.status === "loaded") {
                const loadTime = performance.now() - startTime
                console.log(`Fonts already loaded in ${loadTime.toFixed(2)}ms`)
                resolve({ loaded: true, loadTime })
                return
            }

            // Race between font loading and timeout
            Promise.race([document.fonts.ready, new Promise((timeoutResolve) => setTimeout(timeoutResolve, 3000))]).then(
                () => {
                    const loadTime = performance.now() - startTime
                    console.log(`Fonts loaded in ${loadTime.toFixed(2)}ms`)

                    // Dispatch custom event for components to listen to
                    window.dispatchEvent(
                        new CustomEvent("fontsLoaded", {
                            detail: { loadTime },
                        }),
                    )

                    resolve({ loaded: true, loadTime })
                },
            )
        })
    },

    // Apply optimized font loading classes
    applyFontLoadingClasses: () => {
        if (typeof window === "undefined") return

        // Add initial loading class for system fonts
        document.documentElement.classList.add("font-loading")

        // Monitor font loading and update classes
        if ("fonts" in document) {
            Promise.race([
                document.fonts.ready,
                new Promise((resolve) => setTimeout(resolve, 3000)), // 3s timeout
            ]).then(() => {
                document.documentElement.classList.remove("font-loading")
                document.documentElement.classList.add("fonts-loaded")

                // Trigger reflow for any elements waiting for font load
                document.body.offsetHeight
            })
        } else {
            // Fallback for older browsers
            setTimeout(() => {
                document.documentElement.classList.remove("font-loading")
                document.documentElement.classList.add("fonts-loaded")
            }, 3000)
        }
    },

    // Optimize LCP elements specifically
    optimizeLCPElements: () => {
        if (typeof window === "undefined") return

        // Add LCP optimization classes to critical elements
        const lcpElements = document.querySelectorAll(".hero-title, .hero-text, .lcp-optimized")

        lcpElements.forEach((element) => {
            element.classList.add("lcp-optimized")

            // Ensure immediate visibility with CSS properties
            if (element instanceof HTMLElement) {
                // Use CSS custom properties instead of direct style assignment
                element.style.setProperty("text-rendering", "optimizeSpeed")
                element.style.setProperty("contain", "layout style paint")
                element.style.setProperty("font-synthesis", "none")
            }
        })
    },

    // Performance monitoring for LCP
    monitorLCPPerformance: () => {
        if (typeof window === "undefined" || !("PerformanceObserver" in window)) return

        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry) => {
                if (entry.entryType === "largest-contentful-paint") {
                    console.log(`LCP: ${entry.startTime.toFixed(2)}ms`)

                    // Check if LCP element is text-based
                    const lcpEntry = entry as any
                    if (lcpEntry.element && lcpEntry.element.textContent) {
                        console.log(`LCP element: ${lcpEntry.element.tagName} with text content`)
                        console.log(`Font family: ${getComputedStyle(lcpEntry.element).fontFamily}`)
                    }
                }
            })
        })

        observer.observe({ entryTypes: ["largest-contentful-paint"] })

        return observer
    },
}

// Font metrics for better fallback matching
export const fontMetrics = {
    inter: {
        ascent: 2728,
        descent: -680,
        lineGap: 0,
        unitsPerEm: 2816,
        xHeight: 1536,
        capHeight: 2048,
        sizeAdjust: 0.5,
    },
    playfairDisplay: {
        ascent: 1082,
        descent: -251,
        lineGap: 0,
        unitsPerEm: 1000,
        xHeight: 430,
        capHeight: 708,
        sizeAdjust: 0.48,
    },
    systemUI: {
        ascent: 2728,
        descent: -680,
        lineGap: 0,
        unitsPerEm: 2816,
        xHeight: 1536,
        capHeight: 2048,
        sizeAdjust: 1,
    },
    georgia: {
        ascent: 1878,
        descent: -449,
        lineGap: 0,
        unitsPerEm: 2048,
        xHeight: 917,
        capHeight: 1419,
        sizeAdjust: 1,
    },
}

// Calculate optimal size-adjust for fallback fonts
export const calculateSizeAdjust = (customFont: any, fallbackFont: any) => {
    const customRatio = customFont.xHeight / customFont.unitsPerEm
    const fallbackRatio = fallbackFont.xHeight / fallbackFont.unitsPerEm
    return customRatio / fallbackRatio
}

// Animation optimization for LCP
export const animationOptimization = {
    // Defer animations until after LCP
    deferAnimationsUntilLCP: () => {
        if (typeof window === "undefined") return

        let lcpCompleted = false

        // Monitor LCP completion
        if ("PerformanceObserver" in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries()
                entries.forEach((entry) => {
                    if (entry.entryType === "largest-contentful-paint") {
                        lcpCompleted = true

                        // Enable animations after LCP
                        document.documentElement.classList.add("lcp-completed")

                        // Dispatch event for components
                        window.dispatchEvent(new CustomEvent("lcpCompleted"))
                    }
                })
            })

            observer.observe({ entryTypes: ["largest-contentful-paint"] })
        }

        // Fallback timeout
        setTimeout(() => {
            if (!lcpCompleted) {
                lcpCompleted = true
                document.documentElement.classList.add("lcp-completed")
                window.dispatchEvent(new CustomEvent("lcpCompleted"))
            }
        }, 2500)
    },

    // Optimize Framer Motion for LCP
    getOptimizedMotionProps: (isLCPElement = false) => {
        if (isLCPElement) {
            return {
                initial: { opacity: 1, y: 0 }, // Start visible
                animate: { opacity: 1, y: 0 }, // No animation
                transition: { duration: 0 }, // Instant
            }
        }

        return {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.5 }, // Delayed
        }
    },

    // Create CSS-only animations for critical elements
    applyCSSAnimations: () => {
        const style = document.createElement("style")
        style.textContent = `
        .lcp-element {
          opacity: 1;
          transform: translateY(0);
          transition: none;
        }
        
        .fonts-loaded .lcp-element {
          transition: opacity 0.3s ease-in-out;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .lcp-element,
          .fonts-loaded .lcp-element {
            transition: none !important;
            animation: none !important;
          }
        }
      `
        document.head.appendChild(style)
    },
}

// Initialize all optimizations
export const initializeFontOptimizations = () => {
    if (typeof window === "undefined") return

    // Apply font loading strategy
    fontLoadingStrategy.applyFontLoadingClasses()
    fontLoadingStrategy.preloadCriticalFonts()
    fontLoadingStrategy.optimizeLCPElements()

    // Monitor performance
    const lcpObserver = fontLoadingStrategy.monitorLCPPerformance()
    const fontPromise = fontLoadingStrategy.monitorFontLoading()

    // Optimize animations
    animationOptimization.deferAnimationsUntilLCP()
    animationOptimization.applyCSSAnimations()

    return {
        lcpObserver,
        fontPromise,
        cleanup: () => {
            lcpObserver?.disconnect()
        },
    }
}
  