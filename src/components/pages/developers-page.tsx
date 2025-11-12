"use client"

import Image from "next/image"
import goannyLogo from "../../../public/goanny-logo.png"

export default function DevelopersPage() {
    const developers = [
        {
            name: "Dev Team",
            role: "Application Development",
            icon: "👨‍💻",
            description: "मोबाईल अनुप्रयोग विकास",
        },
        {
            name: "Design Team",
            role: "UI/UX Design",
            icon: "🎨",
            description: "वापरकर्ता इंटरफेस व अनुभव डिझाइन",
        },
        {
            name: "Product Team",
            role: "Project Management",
            icon: "📊",
            description: "प्रकल्प नियोजन व व्यवस्थापन",
        },
        {
            name: "QA Team",
            role: "Quality Assurance",
            icon: "✅",
            description: "गुणवत्ता परीक्षण व सुनिश्चितता",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
            {/* Animated background decorations */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="max-w-6xl w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 bg-gradient-to-r from-emerald-600/10 to-amber-600/10 backdrop-blur-sm rounded-full border border-emerald-600/20 shadow-lg mb-6">
                        <span className="text-xl md:text-2xl">👥</span>
                        <p className="text-emerald-800 font-bold text-base md:text-lg tracking-wide">विकासक टीम</p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight px-4">
                        विकासक टीम
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-emerald-600/50"></div>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light italic">Development Team Credits</p>
                        <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-emerald-600/50"></div>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Developers Grid */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
                    {developers.map((dev, idx) => (
                        <div
                            key={idx}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-amber-300 h-full">
                                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                                    <div className="text-5xl sm:text-6xl md:text-7xl group-hover:scale-125 transition-transform duration-500 flex-shrink-0">
                                        {dev.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-900 mb-2">{dev.name}</h3>
                                        <p className="text-orange-600 font-bold text-sm sm:text-base md:text-lg mb-3">{dev.role}</p>
                                        <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full mb-3"></div>
                                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">{dev.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Thanks Section */}
                <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-amber-400/30 shadow-2xl mb-10 md:mb-16 text-center relative overflow-hidden">
                    {/* Decorative background patterns */}
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <div className="inline-block mb-4 md:mb-6">
                            <div className="text-4xl md:text-5xl mb-2">🙏</div>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4 md:mb-6">विशेष आभार</h3>

                        <div className="h-px bg-white/30 max-w-md mx-auto mb-4 md:mb-6"></div>

                        <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2">
                            या प्रकल्पाच्या यशामध्ये सहभागी झालेल्या सर्व हितधारक, सहयोगी आणि विकासकांचे मनःपूर्वक आभार.
                            <br className="hidden sm:block" />
                            <span className="font-bold text-white text-lg sm:text-xl md:text-2xl"> ग्राम कनेक्ट </span>
                            हे यश सर्वांच्या एकत्र प्रयत्नांचे फलित आहे.
                        </p>

                        {/* Decorative dots */}
                        <div className="flex justify-center gap-2 mt-6 md:mt-8">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Made with Love Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-block bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl px-6 sm:px-8 md:px-12 py-6 md:py-8 border-2 border-pink-200/50 shadow-xl">
                        <div className="text-4xl md:text-5xl mb-3 md:mb-4 animate-pulse">❤️</div>
                        <p className="text-2xl sm:text-3xl md:text-4xl text-emerald-900 font-bold mb-2 md:mb-3">प्रेम व समर्पणाने बनवले</p>
                        <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent max-w-xs mx-auto mb-2 md:mb-3"></div>
                        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light italic">Made with ❤️ and Dedication</p>
                    </div>
                </div>

                {/* Goanny Logo - Highlighted Section */}
                <div className="relative">
                    {/* Premium card with glow effect */}
                    <div className="relative group">
                        {/* Outer glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-amber-500/30 to-orange-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>

                        {/* Main card */}
                        <div className="relative bg-gradient-to-br from-white via-amber-50/50 to-emerald-50/50 rounded-3xl p-6 sm:p-8 md:p-12 border-4 border-amber-300/60 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                            {/* Corner decorations */}
                            <div className="absolute top-3 left-3 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-emerald-600/30"></div>
                            <div className="absolute top-3 right-3 w-8 h-8 md:w-12 md:h-12 border-t-4 border-r-4 border-emerald-600/30"></div>
                            <div className="absolute bottom-3 left-3 w-8 h-8 md:w-12 md:h-12 border-b-4 border-l-4 border-orange-600/30"></div>
                            <div className="absolute bottom-3 right-3 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-orange-600/30"></div>

                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 rounded-full border border-emerald-400/30 shadow-lg mb-6 md:mb-8">
                                    <span className="text-xl md:text-2xl">🚀</span>
                                    <p className="text-emerald-800 font-bold text-sm sm:text-base md:text-lg">Developed by</p>
                                </div>

                                <div className="flex flex-col items-center gap-4 md:gap-6">
                                    {/* Logo container with spotlight effect */}
                                    <div className="relative group/logo">
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 to-orange-500/40 rounded-2xl blur-xl group-hover/logo:blur-2xl transition-all duration-500"></div>
                                        <div className="relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-amber-200 transform group-hover/logo:scale-110 transition-all duration-500">
                                            <Image
                                                src={goannyLogo}
                                                alt="Goanny Logo"
                                                width={200}
                                                height={80}
                                                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain drop-shadow-xl"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Company tagline */}
                                    <div className="space-y-2">
                                        <p className="text-emerald-800 font-bold text-lg sm:text-xl md:text-2xl">
                                            Technology Partner
                                        </p>
                                        <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500 rounded-full mx-auto"></div>
                                        <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">
                                            तंत्रज्ञान भागीदार
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative sparkles around logo */}
                                <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
                                    <span className="text-2xl md:text-3xl animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
                                    <span className="text-2xl md:text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</span>
                                    <span className="text-2xl md:text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
                </div>
            </div>
        </div>
    )
}