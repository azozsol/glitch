/**
 * GlitchLogo.jsx
 * ─────────────────────────────────────────────────────────────
 * GLITCHBRUSSELS.COM — Animated logo component for React (G only)
 *
 * Usage:
 *   import GlitchLogo from './components/GlitchLogo'
 *
 *   <GlitchLogo />
 *   <GlitchLogo width={400} />
 *   <GlitchLogo theme="light" />          // 'dark' | 'light'
 *   <GlitchLogo animated={false} />
 *   <GlitchLogo intensity="subtle" />     // 'subtle' | 'normal' | 'aggressive'
 *   <GlitchLogo asLink href="/" />        // wraps in <a>
 *
 * No external dependencies. React hooks only.
 * ─────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from 'react'

// ── Animation config per intensity level ─────────────────────
const INTENSITY = {
    subtle: {
        interval: [5000, 9000],
        duration: [60, 120],
        slices: [1, 2],
        maxOffset: 3,
        opacity: [0.45, 0.65],
    },
    normal: {
        interval: [3000, 6000],
        duration: [80, 160],
        slices: [2, 3],
        maxOffset: 5,
        opacity: [0.55, 0.80],
    },
    aggressive: {
        interval: [1200, 3000],
        duration: [100, 200],
        slices: [2, 4],
        maxOffset: 8,
        opacity: [0.65, 0.90],
    },
}

const rand = (a, b) => Math.random() * (b - a) + a
const randInt = (a, b) => Math.floor(rand(a, b))
const GHOST_COLORS = ['#ff2d78', '#b6ff2e', '#00e5ff']

// ── Main exported component ───────────────────────────────────
export default function GlitchLogo({
    width = 360,
    theme = 'dark',
    animated = true,
    intensity = 'normal',
    asLink = false,
    href = '/',
    className = '',
    style = {},
}) {
    const cfg = INTENSITY[intensity] || INTENSITY.normal
    const [slices, setSlices] = useState([])
    const scheduleRef = useRef(null)
    const burstRef = useRef(null)

    const colors = {
        topHalf: theme === 'dark' ? '#7f7f7e' : '#3a3a3a',
        btmHalf: '#049cd8',
    }

    // ── Animation engine ────────────────────────────────────────
    useEffect(() => {
        if (!animated) return

        function makeSlices(n) {
            return Array.from({ length: n }, () => ({
                yPct: rand(0.05, 0.88),
                hPct: rand(0.05, 0.22),
                dx: rand(-cfg.maxOffset, cfg.maxOffset),
                color: GHOST_COLORS[randInt(0, GHOST_COLORS.length)],
                opacity: rand(cfg.opacity[0], cfg.opacity[1]),
            }))
        }

        function runBurst() {
            const totalMs = randInt(cfg.duration[0], cfg.duration[1])
            const numSlice = randInt(cfg.slices[0], cfg.slices[1] + 1)
            const ticks = randInt(3, 6)
            const tickMs = Math.floor(totalMs / ticks)
            let tick = 0

            setSlices(makeSlices(numSlice))

            burstRef.current = setInterval(() => {
                tick++
                if (tick >= ticks) {
                    clearInterval(burstRef.current)
                    setSlices([])
                    return
                }
                setSlices(makeSlices(numSlice))
            }, tickMs)
        }

        function schedule() {
            const delay = randInt(cfg.interval[0], cfg.interval[1])
            scheduleRef.current = setTimeout(() => {
                runBurst()
                schedule()
            }, delay)
        }

        scheduleRef.current = setTimeout(schedule, 1200)

        return () => {
            clearTimeout(scheduleRef.current)
            clearInterval(burstRef.current)
        }
    }, [animated, intensity])

    // ── Dimensions — viewBox cropped to just the G glyph ────────
    // Original G spans roughly x:51 → x:224, full height 0 → 334.63
    const VIEW_W = 173   // 224 - 51
    const VIEW_H = 334.63
    const AR = VIEW_W / VIEW_H
    const height = Math.round(width / AR)
    const uid = useRef(`gbl-${Math.random().toString(36).slice(2, 7)}`).current

    const logoEl = (
        <div
            className={className}
            style={{ position: 'relative', display: 'inline-block', width, height, lineHeight: 0, ...style }}
            role="img"
            aria-label="G"
        >
            {/* ── BASE LOGO ── */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="51 0 173 334.63"
                width={width}
                height={height}
                style={{ position: 'absolute', inset: 0 }}
                aria-hidden="true"
            >
                <defs>
                    <clipPath id={`${uid}-top`}>
                        <polygon points="3.53 0 1993.8 0 1990.27 144.29 0 144.29 3.53 0" />
                    </clipPath>
                    <linearGradient id={`${uid}-div`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#049cd8" stopOpacity="1" />
                        <stop offset="1" stopColor="#049cd8" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Top grey layer */}
                <g clipPath={`url(#${uid}-top)`}>
                    <TopHalfG fill={colors.topHalf} />
                </g>

                {/* Bottom cyan layer */}
                <BottomHalfG fill={colors.btmHalf} />
            </svg>

            {/* ── GLITCH LAYERS ── */}
            {animated && slices.map((s, i) => (
                <GlitchSlice
                    key={i}
                    width={width}
                    height={height}
                    viewBox="51 0 173 334.63"
                    uid={`${uid}-s${i}`}
                    yPct={s.yPct}
                    hPct={s.hPct}
                    dx={s.dx}
                    color={s.color}
                    opacity={s.opacity}
                />
            ))}
        </div>
    )

    return asLink
        ? <a href={href} style={{ display: 'inline-block', lineHeight: 0 }}>{logoEl}</a>
        : logoEl
}


// ── GlitchSlice ──────────────────────────────────────────────
function GlitchSlice({ width, height, viewBox, uid, yPct, hPct, dx, color, opacity }) {
    const VW = 173
    const VH = 334.63
    const y = yPct * VH
    const h = hPct * VH
    const dxV = (dx / width) * VW

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={width}
            height={height}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            aria-hidden="true"
        >
            <defs>
                <clipPath id={`${uid}-c`}>
                    <rect x="51" y={y} width={VW} height={h} />
                </clipPath>
            </defs>
            <g
                clipPath={`url(#${uid}-c)`}
                transform={`translate(${dxV}, 0)`}
                opacity={opacity}
                style={{ mixBlendMode: 'screen' }}
            >
                <TopHalfG fill={color} />
                <BottomHalfG fill={color} />
            </g>
        </svg>
    )
}


// ── G glyph — top half (grey layer) ──────────────────────────
function TopHalfG({ fill }) {
    return (
        <g fill={fill}>
            <path d="M117.75,292.63c-12.32,0-23.47-3.03-33.48-9.09-10.01-6.06-17.99-15.15-23.95-27.27-5.97-12.12-8.95-27.13-8.95-45.02v-47.33c0-17.5,3.22-32.32,9.67-44.44,6.44-12.12,15.34-21.31,26.69-27.56,11.35-6.25,24.43-9.38,39.25-9.38s28.57,3.28,39.54,9.81c10.97,6.54,19.34,15.34,25.11,26.41,5.77,11.06,8.66,23.43,8.66,37.08v3.46h-38.09v-3.46c0-12.12-3.13-21.3-9.38-27.56-6.25-6.25-15.06-9.38-26.4-9.38-10.58,0-19.39,3.56-26.41,10.68-7.02,7.12-10.53,19.53-10.53,37.23v42.71c0,31.17,12.7,46.75,38.09,46.75,11.35,0,19.96-3.08,25.83-9.23,5.86-6.15,8.8-14.23,8.8-24.24h-48.48v-36.36h86.58v102.16h-34.63v-22.51h-5.19c-2.31,7.5-6.74,13.81-13.27,18.9-6.55,5.09-16.36,7.65-29.44,7.65Z" />
        </g>
    )
}

// ── G glyph — bottom half (cyan layer) ───────────────────────
function BottomHalfG({ fill }) {
    return (
        <g fill={fill}>
            <path d="M184.02,147.7c.36,2.55.56,5.25.56,8.14v3.46h38.09v-3.46c0-2.78-.18-5.47-.42-8.14h-38.23Z" />
            <path d="M136.1,222.79h48.48c0,10.01-2.93,18.09-8.8,24.24-5.87,6.16-14.48,9.23-25.83,9.23-25.39,0-38.09-15.58-38.09-46.75v-42.71c0-7.28.62-13.63,1.81-19.11h-38.84c-.69,5.12-1.06,10.52-1.06,16.22v47.33c0,17.89,2.98,32.9,8.95,45.02,5.96,12.12,13.95,21.21,23.95,27.27,10,6.06,21.16,9.09,33.48,9.09,13.08,0,22.89-2.55,29.44-7.65,6.54-5.09,10.97-11.4,13.27-18.9h5.19v22.51h34.63v-102.16h-86.58v36.36Z" />
        </g>
    )
}