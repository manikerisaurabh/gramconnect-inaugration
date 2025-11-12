"use client"

export default function AppIntroPage() {
    const features = [
        "गावीण सेवा व संसाधनांचे व्यवस्थापन",
        "नागरिकांसह थेट संवाद",
        "विकास प्रकल्पांचे वास्तविक वेळ ट्रॅकिंग",
        "स्थानिक भाषा समर्थन - मराठी",
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a5a3a] via-[#2d8f5f] to-[#1a5a3a] p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#d4a574]/20 rounded-full blur-3xl animate-pulse-gentle" />
            <div
                className="absolute bottom-20 left-10 w-64 h-64 bg-[#e66d4e]/20 rounded-full blur-3xl animate-pulse-gentle"
                style={{ animationDelay: "0.5s" }}
            />

            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-down-reveal">
                    {/* <div className="inline-block mb-6 px-6 py-2 glass-effect rounded-full">
                        <p className="text-white font-semibold">📱 अ‍ॅप परिचय</p>
                    </div> */}
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">ग्राम कनेक्ट अ‍ॅप</h2>
                    <p className="text-2xl text-white/80 mb-2">Gram Connect Mobile Application</p>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#d4a574]" />
                        <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
                        <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#d4a574]" />
                    </div>
                </div>

                {/* App Logo & Description Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Logo Side */}
                    <div
                        className="flex flex-col items-center justify-center animate-slide-in-left"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="mb-10 p-10 glass-effect rounded-3xl border-2 border-white/30 hover:border-[#d4a574]/60 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-premium">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251110-WA0018-A973Hjdx6CpKl4ZoAAIpAVpWJ8Cd83.jpg"
                                alt="Gram Connect App Logo"
                                className="w-56 h-56 object-contain drop-shadow-lg"
                            />
                        </div>
                        <p className="text-white/80 text-lg text-center font-light">ग्रामीण भूमिरचना व विकास</p>
                    </div>

                    {/* Description Side */}
                    <div className="text-white space-y-8 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-bold text-[#d4a574]">अ‍ॅपचे उद्देश्य</h3>
                            <p className="text-white/90 leading-relaxed text-lg">
                                ग्राम कनेक्ट हा एक अभिनव डिजिटल प्लॅटफॉर्म आहे जो ग्रामीण विकास कार्यक्रमांना तेजस्वी करतो आणि नागरिकांना सशक्त बनवतो.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[#d4a574]">मुख्य वैशिष्ट्ये:</h3>
                            <div className="space-y-3">
                                {features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 glass-effect rounded-lg transform transition-all hover:scale-105 hover:bg-white/20"
                                        style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-[#1a5a3a] font-bold">✓</span>
                                        </div>
                                        <span className="text-white/90 pt-1">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 p-6 glass-effect rounded-xl border-2 border-[#d4a574]/40">
                            <p className="text-center text-[#d4a574] font-bold text-lg">आधुनिक तंत्रज्ञान × पारंपरिक मूल्यांचे संयोजन</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
