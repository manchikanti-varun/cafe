// Font optimization utilities

export const fontLoadingStrategy = {
    // Preload critical fonts
    preloadFonts: () => {
        if (typeof window === "undefined") return

        const criticalFonts = [
            "/_next/static/media/inter-latin-400-normal.woff2",
            "/_next/static/media/playfair-display-latin-400-normal.woff2",
        ]

        criticalFonts.forEach((fontUrl) => {
            const link = document.createElement("link")
            link.rel = "preload"
            link.as = "font"
            link.type = "font/woff2"
            link.crossOrigin = "anonymous"
            link.href = fontUrl
            document.head.appendChild(link)
        })
    },

    // Monitor font loading status
    monitorFontLoading: () => {
        if (typeof window === "undefined" || !("fonts" in document)) return

        return new Promise((resolve) => {
            if (document.fonts.status === "loaded") {
                resolve(true)
                return
            }

            document.fonts.ready.then(() => {
                resolve(true)
            })
        })
    },

    // Apply font loading classes
    applyFontLoadingClasses: () => {
        if (typeof window === "undefined") return

        // Add initial loading class
        document.documentElement.classList.add("font-loading")

        // Remove loading class when fonts are ready
        if ("fonts" in document) {
            document.fonts.ready.then(() => {
                document.documentElement.classList.remove("font-loading")
                document.documentElement.classList.add("fonts-loaded")
            })
        }
    },

    // Fallback for older browsers
    fallbackFontLoading: () => {
        if (typeof window === "undefined") return

        // Simple timeout fallback
        setTimeout(() => {
            document.documentElement.classList.remove("font-loading")
            document.documentElement.classList.add("fonts-loaded")
        }, 3000) // 3 second fallback
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
    },
    playfairDisplay: {
        ascent: 1082,
        descent: -251,
        lineGap: 0,
        unitsPerEm: 1000,
        xHeight: 430,
        capHeight: 708,
    },
}

// Calculate size-adjust for better fallback matching
export const calculateSizeAdjust = (customFont: any, fallbackFont: any) => {
    return customFont.xHeight / customFont.unitsPerEm / (fallbackFont.xHeight / fallbackFont.unitsPerEm)
}
  