"use client"
import Image from 'next/image'
import logo from '../../../public/logo.jpg'

export default function WelcomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

            {/* Decorative ribbons */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Decorative corner patterns */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-amber-400/40"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-amber-400/40"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-orange-500/40"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-orange-500/40"></div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                {/* Logo Section */}
                <div className="mb-8 md:mb-12 flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-full p-4 md:p-6 border-4 border-white/30 shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                            <Image
                                src={logo}
                                alt='Gram Connect Logo'
                                width={120}
                                height={120}
                                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Main Title */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight px-4">
                        ग्राम कनेक्ट पिरगुट
                    </h1>
                    <div className="flex justify-center mb-4">
                        <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full"></div>
                    </div>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide px-4">
                        Gram Connect Pirgaon
                    </p>
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10">
                    <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
                </div>

                {/* Campaign Section */}
                <div className="mb-8 md:mb-12 px-4">
                    <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-6 md:px-10 py-4 md:py-6 border-2 border-white/30 shadow-xl">
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-2">
                            मुख्यमंत्री समृद्ध पंचायतराज उभियान
                        </p>
                        <div className="h-px bg-white/30 my-3"></div>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light">
                            Chief Minister Prosperous Panchayat Campaign
                        </p>
                    </div>
                </div>

                {/* Event Card */}
                <div className="px-4">
                    <div className="relative group">
                        {/* Glowing background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-amber-500/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                        {/* Main card */}
                        <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl px-6 md:px-12 py-8 md:py-10 border-2 border-white/40 shadow-2xl transform group-hover:scale-105 transition-all duration-500 ">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <span className="text-3xl md:text-4xl">🎊</span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                    अभिनंदन समारंभ
                                </h2>
                                <span className="text-3xl md:text-4xl">🎊</span>
                            </div>

                            <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 mx-auto mb-4 rounded-full"></div>

                            <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light italic">
                                Inauguration Event
                            </p>

                            {/* Additional decorative elements */}
                            <div className="flex justify-center gap-6 md:gap-8 mt-6">
                                <span className="text-2xl md:text-3xl opacity-60">✨</span>
                                <span className="text-2xl md:text-3xl opacity-80">🌟</span>
                                <span className="text-2xl md:text-3xl opacity-60">✨</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"
                            style={{
                                left: `${10 + (i * 11)}%`,
                                top: `${15 + (i % 3) * 25}%`,
                                animationDelay: `${i * 0.4}s`,
                                opacity: 0.4 + (i % 3) * 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Animated sparkles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3">
                    <div className="w-full h-full bg-amber-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2" style={{ animationDelay: '1s' }}>
                    <div className="w-full h-full bg-orange-400 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5" style={{ animationDelay: '2s' }}>
                    <div className="w-full h-full bg-amber-300 rounded-full animate-ping"></div>
                </div>
            </div>
        </div>
    )
}