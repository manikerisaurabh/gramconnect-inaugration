"use client"
import Image from 'next/image'
import logo from '../../../public/logo.jpg'

export default function WelcomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 flex items-center justify-center p-4 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Enhanced animated background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-orange-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-amber-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />

            {/* Decorative ribbons */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Enhanced corner patterns with hover */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-amber-400/50 hover:border-amber-400 transition-all duration-500 hover:w-20 hover:h-20 md:hover:w-24 md:hover:h-24"></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 border-t-4 border-r-4 border-amber-400/50 hover:border-amber-400 transition-all duration-500 hover:w-20 hover:h-20 md:hover:w-24 md:hover:h-24"></div>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-16 h-16 md:w-20 md:h-20 border-b-4 border-l-4 border-orange-500/50 hover:border-orange-500 transition-all duration-500 hover:w-20 hover:h-20 md:hover:w-24 md:hover:h-24"></div>
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-orange-500/50 hover:border-orange-500 transition-all duration-500 hover:w-20 hover:h-20 md:hover:w-24 md:hover:h-24"></div>

            <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
                {/* Enhanced Logo Section - More space */}
                <div className="mb-12 md:mb-16 lg:mb-20 flex justify-center">
                    <div className="relative group">
                        {/* Premium glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 to-orange-500/40 rounded-full blur-3xl group-hover:blur-[4rem] transition-all duration-700 animate-pulse"></div>

                        {/* Logo container */}
                        <div className="relative bg-white/15 backdrop-blur-2xl rounded-full p-5 md:p-7 lg:p-8 border-4 md:border-[6px] border-white/40 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                            <Image
                                src={logo}
                                alt='Gram Connect Logo'
                                width={150}
                                height={150}
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover"
                                priority
                                quality={100}
                            />
                        </div>

                        {/* Orbiting sparkles */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                </div>

                {/* Main Title Section - Better spacing */}
                <div className="mb-10 md:mb-14 lg:mb-16">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-5 md:mb-6 leading-tight px-4 hover:scale-105 transition-transform duration-500">
                        ग्राम कनेक्ट पिरंगुट
                    </h1>

                    {/* Enhanced divider */}
                    <div className="flex justify-center mb-5 md:mb-6">
                        <div className="h-1.5 w-28 md:w-40 lg:w-48 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full shadow-lg shadow-amber-500/50"></div>
                    </div>

                    {/* <p className="text-2xl sm:text-3xl md:text-4xl text-white/95 font-light tracking-wide px-4 italic">
                        Gram Connect Pirgaon
                    </p> */}
                </div>

                {/* Decorative Divider with more prominence */}
                <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-14 lg:mb-16">
                    <div className="h-px w-16 md:w-24 lg:w-32 bg-gradient-to-r from-transparent via-amber-400 to-amber-400/50 rounded-full"></div>
                    <div className="flex gap-3">
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-400/70"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/70" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-400/70" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                    <div className="h-px w-16 md:w-24 lg:w-32 bg-gradient-to-l from-transparent via-amber-400 to-amber-400/50 rounded-full"></div>
                </div>

                {/* Campaign Section - Enhanced card with better spacing */}
                <div className="mb-12 md:mb-16 lg:mb-20 px-4">
                    <div className="relative group/campaign inline-block">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-2xl group-hover/campaign:blur-3xl transition-all duration-700"></div>

                        {/* Main card */}
                        {/* <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl px-8 sm:px-10 md:px-14 lg:px-16 py-6 md:py-8 lg:py-10 border-2 md:border-3 border-white/40 shadow-2xl hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all duration-500 hover:scale-105">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-400/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl md:text-3xl">🏛️</span>
                                </div>
                            </div>

                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 md:mb-5">
                                मुख्यमंत्री समृद्ध पंचायतराज उभियान
                            </p>

                            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent my-4 md:my-5"></div>

                            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light italic">
                                Chief Minister Prosperous Panchayat Campaign
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Event Card - Spectacular main highlight */}
                <div className="px-4">
                    <div className="relative group/event">
                        {/* Premium outer glow - multiple layers */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/60 via-orange-500/60 to-amber-500/60 rounded-[2.5rem] blur-2xl group-hover/event:blur-3xl transition-all duration-700 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-600/30 rounded-[2.5rem] blur-3xl group-hover/event:blur-[4rem] transition-all duration-700"></div>

                        {/* Main event card */}
                        <div className="relative bg-white/20 backdrop-blur-3xl rounded-[2.5rem] px-8 sm:px-10 md:px-16 lg:px-20 py-10 md:py-14 lg:py-16 border-4 border-white/50 shadow-[0_0_60px_rgba(0,0,0,0.3)] transform group-hover/event:scale-105 transition-all duration-700">
                            {/* Top emoji decoration */}
                            <div className="flex items-center justify-center gap-4 md:gap-5 mb-6 md:mb-8">
                                <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎊</span>
                                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                                <span className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🎊</span>
                            </div>

                            {/* Main heading */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                                अभिनंदन समारंभ
                            </h2>

                            {/* Decorative divider */}
                            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                                <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-transparent via-amber-400 to-orange-500 rounded-full"></div>
                                <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-lg shadow-white/50"></div>
                                <div className="h-1.5 w-24 md:w-32 bg-gradient-to-l from-transparent via-orange-500 to-amber-400 rounded-full"></div>
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light italic mb-8 md:mb-10">
                                Inauguration Event
                            </p>

                            {/* Bottom decorative elements */}
                            <div className="flex justify-center items-center gap-6 md:gap-10">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-3xl md:text-4xl opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300">✨</span>
                                    <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-4xl md:text-5xl opacity-90 hover:opacity-100 hover:scale-125 transition-all duration-300">🌟</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-3xl md:text-4xl opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300">✨</span>
                                    <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating decorative elements - enhanced */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-amber-300 rounded-full animate-pulse shadow-lg shadow-amber-300/50"
                            style={{
                                left: `${5 + (i * 8)}%`,
                                top: `${10 + (i % 4) * 22}%`,
                                animationDelay: `${i * 0.4}s`,
                                opacity: 0.3 + (i % 3) * 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Enhanced animated sparkles */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4">
                    <div className="w-full h-full bg-amber-400 rounded-full animate-ping shadow-lg shadow-amber-400/50"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3" style={{ animationDelay: '1s' }}>
                    <div className="w-full h-full bg-orange-400 rounded-full animate-ping shadow-lg shadow-orange-400/50"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/3 w-3.5 h-3.5" style={{ animationDelay: '2s' }}>
                    <div className="w-full h-full bg-amber-300 rounded-full animate-ping shadow-lg shadow-amber-300/50"></div>
                </div>
                <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5" style={{ animationDelay: '1.5s' }}>
                    <div className="w-full h-full bg-orange-300 rounded-full animate-ping shadow-lg shadow-orange-300/50"></div>
                </div>
            </div>
        </div>
    )
}