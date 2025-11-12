"use client"

import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface NavigationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    autoAdvance: boolean
    onAutoAdvanceToggle: (value: boolean) => void
}

export default function Navigation({
    currentPage,
    totalPages,
    onPageChange,
    autoAdvance,
    onAutoAdvanceToggle,
}: NavigationProps) {
    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-6 glass-effect rounded-full px-8 py-4 shadow-premium border-2 border-white/40 backdrop-blur-xl hover:border-[#d4a574]/60 transition-all duration-300">
                {/* Previous Button */}
                <button
                    onClick={() => onPageChange(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="p-3 hover:bg-[#1a5a3a]/20 hover:text-[#1a5a3a] rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-white transform hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Page Indicators */}
                <div className="flex gap-3 px-4">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => onPageChange(i)}
                            className={`rounded-full transition-all duration-300 transform hover:scale-150 ${i === currentPage ? "bg-[#d4a574] w-8 h-3" : "bg-white/40 hover:bg-white/60 w-3 h-3"
                                }`}
                        />
                    ))}
                </div>

                {/* Play/Pause Button */}
                <button
                    onClick={() => onAutoAdvanceToggle(!autoAdvance)}
                    className="p-3 hover:bg-[#e66d4e]/20 hover:text-[#e66d4e] rounded-full transition-all duration-300 text-white transform hover:scale-110"
                >
                    {autoAdvance ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
                    disabled={currentPage === totalPages - 1}
                    className="p-3 hover:bg-[#1a5a3a]/20 hover:text-[#1a5a3a] rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-white transform hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    )
}
