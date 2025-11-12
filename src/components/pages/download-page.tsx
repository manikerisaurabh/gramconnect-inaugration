"use client"

import { useEffect, useState } from "react"

export default function DownloadPage() {
    const [animated, setAnimated] = useState<boolean>(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 px-4 py-8 md:py-12 lg:py-16 flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[500px] md:h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

            {/* Decorative ribbons */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-amber-400/40"></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-t-4 border-r-4 border-amber-400/40"></div>

            <div className="max-w-4xl w-full relative z-10">
                {/* Main content card */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-14 border-2 border-white/30 transition-all duration-500">
                    {/* Header */}
                    <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${animated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                        <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-amber-400/30 shadow-lg mb-6">
                            <span className="text-xl md:text-2xl">📱</span>
                            <p className="text-white font-bold text-sm md:text-base">मोबाइल अ‍ॅप</p>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight px-2">
                            आता डाउनलोड करा
                        </h1>

                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
                            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light italic">Download Now</p>
                            <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
                        </div>

                        <div className="flex justify-center gap-2 mt-4">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>

                    {/* QR Code Section */}
                    <div className={`flex flex-col items-center mb-8 md:mb-12 transition-all duration-700 delay-200 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="relative group mb-6 md:mb-8">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                            {/* QR Container */}
                            <div className="relative p-4 sm:p-6 md:p-8 bg-white rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gram%20connect-bAbi9OWatGD4gkKE8GU19W1sD9mP7M.png"
                                    alt="Download QR Code"
                                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                                />
                                {/* Corner accents on QR */}
                                <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-emerald-600/30"></div>
                                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-emerald-600/30"></div>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 border border-white/30 max-w-xl">
                            <div className="h-px bg-white/30 my-3"></div>
                            <p className="text-center text-white/80 text-sm sm:text-base md:text-lg">
                                Scan with your smartphone camera to download the app
                            </p>
                        </div>
                    </div>

                    {/* Platform Card */}
                    <div className={`mb-8 md:mb-10 transition-all duration-700 delay-300 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border-2 border-white/30 hover:border-amber-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center group">
                            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                🤖
                            </div>
                            <h3 className="font-bold text-white mb-2 md:mb-3 text-xl sm:text-2xl md:text-3xl">
                                Android
                            </h3>
                            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-3 md:mb-4 rounded-full"></div>
                            <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium">
                                Google Play Store वर उपलब्ध
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className={`bg-gradient-to-br from-emerald-800/30 to-emerald-900/30 backdrop-blur-xl rounded-2xl p-6 md:p-8 border-2 border-emerald-500/30 mb-8 md:mb-10 transition-all duration-700 delay-400 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center gap-3 mb-5 md:mb-6">
                            <span className="text-3xl md:text-4xl">✨</span>
                            <h3 className="font-bold text-amber-400 text-xl sm:text-2xl md:text-3xl">
                                अ‍ॅपसह मिळणारे
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                            {[
                                { icon: "🇮🇳", text: "संपूर्ण मराठी भाषा समर्थन" },
                                { icon: "🔒", text: "सुरक्षित डेटा व्यवस्थापन" },
                                { icon: "📡", text: "ऑफलाइन कार्यक्षमता" },
                                { icon: "💬", text: "24/7 ग्राहक सहायता" },
                            ].map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 md:gap-4 text-white bg-white/10 rounded-xl p-3 md:p-4 hover:bg-white/20 transition-all duration-300 group"
                                >
                                    <span className="text-2xl md:text-3xl transform group-hover:scale-125 transition-transform duration-300">
                                        {feature.icon}
                                    </span>
                                    <span className="text-sm sm:text-base md:text-lg font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button with Play Store Link */}
                    <div className={`text-center transition-all duration-700 delay-500 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.garmconnect"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 sm:py-5 md:py-6 px-8 sm:px-12 md:px-16 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl text-base sm:text-lg md:text-xl uppercase tracking-wide overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                                <span className="relative flex items-center gap-2 md:gap-3">
                                    <span className="text-xl md:text-2xl">📱</span>
                                    ॲप डाउनलोड करा
                                </span>
                            </button>
                        </a>

                        <p className="text-white/70 text-xs sm:text-sm md:text-base mt-5 md:mt-6 px-4">
                            किंवा सीधे App Store / Play Store शोधा{" "}
                            <span className="text-amber-400 font-bold text-sm sm:text-base md:text-lg">
                                {`"Gram Connect"`}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Footer Message */}
                <div className={`text-center mt-8 md:mt-12 transition-all duration-700 delay-700 ${animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 md:px-8 py-6 md:py-8 border border-white/30 inline-block">
                        <p className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">🙏</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-2 md:mb-3">
                            धन्यवाद!
                        </p>
                        <div className="h-px bg-white/30 max-w-xs mx-auto mb-2 md:mb-3"></div>
                        <p className="text-white/90 text-base sm:text-lg md:text-xl">
                            आमच्या अ‍ॅपला अपना समर्थन देण्याबद्दल
                        </p>
                    </div>
                </div>

                {/* Floating sparkles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"
                            style={{
                                left: `${15 + (i * 15)}%`,
                                top: `${20 + (i % 3) * 30}%`,
                                animationDelay: `${i * 0.5}s`,
                                opacity: 0.5,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
