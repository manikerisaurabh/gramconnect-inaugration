"use client"

export default function WelcomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a5a3a] via-[#2d8f5f] to-[#1a5a3a] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a574]/15 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse-gentle" />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 bg-[#e66d4e]/15 rounded-full -ml-40 -mb-40 blur-3xl animate-pulse-gentle"
                style={{ animationDelay: "0.5s" }}
            />

            {/* Ribbon decoration - top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent opacity-60" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
                {/* Ceremonial crown decoration */}
                <div className="mb-8 animate-slide-down-reveal">
                    <div className="text-6xl mb-4">👑</div>
                </div>

                {/* Main title with staggered animation */}
                <h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance animate-slide-down-reveal"
                    style={{ animationDelay: "0.1s" }}
                >
                    ग्राम कनेक्ट पिरगुट
                </h1>

                {/* Subtitle */}
                <p
                    className="text-2xl md:text-3xl text-white/90 mb-8 font-light animate-slide-up-reveal"
                    style={{ animationDelay: "0.2s" }}
                >
                    Gram Connect Pirgaon
                </p>

                {/* Animated divider */}
                <div
                    className="flex items-center justify-center gap-4 mb-8 animate-scale-in"
                    style={{ animationDelay: "0.3s" }}
                >
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#d4a574]" />
                    <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
                    <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#d4a574]" />
                </div>

                {/* Description */}
                <p
                    className="text-lg text-white/90 font-semibold mb-4 animate-slide-up-reveal"
                    style={{ animationDelay: "0.4s" }}
                >
                    मुख्यमंत्री समृद्ध पंचायतराज उभियान
                </p>
                <p className="text-lg text-white/80 mb-12 animate-slide-up-reveal" style={{ animationDelay: "0.5s" }}>
                    Chief Minister Prosperous Panchayat Campaign
                </p>

                {/* Glass card with event info */}
                <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
                    <div className="glass-effect rounded-2xl px-8 py-6 border-2 border-white/40 backdrop-blur-xl hover:border-[#d4a574]/60 transition-all duration-500 transform hover:scale-105 shadow-premium">
                        <p className="text-white font-bold text-xl mb-2">अभिनंदन समारंभ</p>
                        <p className="text-white/90 text-base">Inauguration Event</p>
                        <div className="h-1 w-12 bg-gradient-to-r from-[#d4a574] to-[#e66d4e] mx-auto mt-4" />
                    </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-[#d4a574] rounded-full animate-pulse-gentle"
                            style={{
                                left: `${20 + i * 30}%`,
                                top: `${30 + i * 20}%`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
