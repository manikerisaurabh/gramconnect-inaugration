"use client"

import { useEffect, useRef, useState } from "react"

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        audio.volume = 0.3
        audio.loop = true
        audio.muted = true

        // Try autoplay (muted)
        audio.play().catch(() => {
            console.log("Autoplay blocked until user interaction")
        })

        // Unmute and play after user click or touch
        const handleUserInteraction = () => {
            if (!audio) return
            if (audio.muted) {
                audio.muted = false
                audio.play()
                    .then(() => setIsPlaying(true))
                    .catch(err => console.warn("Play failed:", err))
            }
        }

        document.addEventListener("click", handleUserInteraction)
        document.addEventListener("touchstart", handleUserInteraction)

        return () => {
            document.removeEventListener("click", handleUserInteraction)
            document.removeEventListener("touchstart", handleUserInteraction)
        }
    }, [])

    return (
        <>
            <audio ref={audioRef} src="/music/background-music.mp3" preload="auto" />
        </>
    )
}
