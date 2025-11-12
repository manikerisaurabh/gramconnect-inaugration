"use client"

import { useEffect, useState } from "react"

export default function DownloadPage() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a5a3a] via-[#2d8f5f] to-[#1a5a3a] p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#d4a574]/20 rounded-full blur-3xl animate-pulse-gentle" />
            <div
                className="absolute bottom-10 left-10 w-72 h-72 bg-[#e66d4e]/20 rounded-full blur-3xl animate-pulse-gentle"
                style={{ animationDelay: "0.5s" }}
            />

            {/* Ribbon decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e66d4e] to-transparent" />

            <div className="max-w-2xl w-full relative z-10">
                {/* Main Content Card */}
                <div className="glass-effect rounded-3xl shadow-premium p-8 md:p-16 border-2 border-white/40 backdrop-blur-xl hover:border-[#d4a574]/60 transition-all duration-500 animate-scale-in">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-down-reveal" style={{ animationDelay: "0.1s" }}>
                        {/* <div className="inline-block mb-6 px-6 py-2 bg-white/20 rounded-full border border-white/40">
                            <p className="text-white font-semibold">📥 आता डाउनलोड करा</p>
                        </div> */}
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">आता डाउनलोड करा</h2>
                        <p className="text-2xl text-white/80">Download Now</p>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#d4a574]" />
                            <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
                            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#d4a574]" />
                        </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="flex flex-col items-center mb-12 animate-slide-up-reveal" style={{ animationDelay: "0.2s" }}>
                        <div className="mb-10 p-8 bg-white rounded-2xl border-4 border-[#1a5a3a]/30 shadow-premium transform transition-all hover:scale-105 hover:shadow-2xl duration-300 animate-floating-bounce">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gram%20connect-bAbi9OWatGD4gkKE8GU19W1sD9mP7M.png"
                                alt="Download QR Code"
                                className="w-64 h-64 object-contain"
                            />
                        </div>
                        <p className="text-center text-white/90 mb-6 max-w-md text-lg font-semibold">
                            अपना स्मार्टफोन कैमरा दिखाएं या QR कोड को स्कैन करें
                        </p>
                        <p className="text-center text-white/70 text-base">Scan with your smartphone camera to download the app</p>
                    </div>

                    {/* Download Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="glass-effect rounded-xl p-8 border border-white/30 hover:border-[#d4a574]/60 transition-all duration-300 transform hover:scale-105 text-center">
                            <p className="text-5xl mb-4">📱</p>
                            <h4 className="font-bold text-white mb-3 text-xl">iOS</h4>
                            <p className="text-white/80">Apple App Store वर उपलब्ध</p>
                        </div>
                        <div className="glass-effect rounded-xl p-8 border border-white/30 hover:border-[#e66d4e]/60 transition-all duration-300 transform hover:scale-105 text-center">
                            <p className="text-5xl mb-4">🤖</p>
                            <h4 className="font-bold text-white mb-3 text-xl">Android</h4>
                            <p className="text-white/80">Google Play Store वर उपलब्ध</p>
                        </div>
                    </div>

                    {/* Features Box */}
                    <div className="glass-effect rounded-xl p-8 border border-white/30 mb-10 backdrop-blur-xl">
                        <h4 className="font-bold text-[#d4a574] mb-6 text-xl">अ‍ॅपसह मिळणारे:</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {["संपूर्ण मराठी भाषा समर्थन", "सुरक्षित डेटा व्यवस्थापन", "ऑफलाइन कार्यक्षमता", "24/7 ग्राहक सहायता"].map(
                                (feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white/90">
                                        <span className="text-xl">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <button className="bg-gradient-to-r from-[#d4a574] to-[#f5c890] hover:from-[#e66d4e] hover:to-[#f5a880] text-[#1a5a3a] font-bold py-5 px-16 rounded-full transition-all duration-300 transform hover:scale-110 shadow-premium text-lg uppercase tracking-wide">
                            QR कोड स्कैन करा
                        </button>
                        <p className="text-white/70 text-sm mt-6">
                            किंवा सीधे App Store / Play Store खोजा <span className="text-[#d4a574] font-bold">{`"Gram Connect"`}</span>
                        </p>
                    </div>
                </div>

                {/* Footer Message */}
                <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <p className="text-3xl font-bold text-[#d4a574] mb-3">धन्यवाद!</p>
                    <p className="text-white/80 text-lg">आमच्या अ‍ॅपला अपना समर्थन देण्याबद्दल</p>
                </div>
            </div>
        </div>
    )
}
