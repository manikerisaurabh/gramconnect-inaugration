"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import goannyLogo from "../../../public/goanny-logo.png"

export default function DevelopersPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const developers = [
        {
            name: "Dev Team",
            role: "Application Development",
            icon: "👨‍💻",
            description: "मोबाईल अनुप्रयोग विकास",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            name: "Design Team",
            role: "UI/UX Design",
            icon: "🎨",
            description: "वापरकर्ता इंटरफेस व अनुभव डिझाइन",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            name: "Product Team",
            role: "Project Management",
            icon: "📊",
            description: "प्रकल्प नियोजन व व्यवस्थापन",
            gradient: "from-orange-500 to-red-500",
        },
        {
            name: "QA Team",
            role: "Quality Assurance",
            icon: "✅",
            description: "गुणवत्ता परीक्षण व सुनिश्चितता",
            gradient: "from-emerald-500 to-teal-500",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-900 relative overflow-hidden flex items-center justify-center px-4 md:px-8 lg:px-12">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/25 rounded-full blur-3xl animate-pulse" />
            <div
                className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-orange-500/25 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
            />

            <div className="relative z-10 max-w-6xl w-full mx-auto py-16 md:py-20 flex flex-col items-center text-center space-y-24 md:space-y-28 gap-8">
                {/* 💼 Developer Team Section */}
                <div className="w-full">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
                        विकासक टीम
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4">
                        {developers.map((dev, idx) => (
                            <div
                                key={idx}
                                className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="group relative h-full">
                                    <div
                                        className={`absolute -inset-2 bg-gradient-to-r ${dev.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 group-hover:scale-105`}
                                    ></div>
                                    <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border-2 border-white/30 hover:border-amber-300/50 shadow-2xl hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                                        <div className="flex items-start gap-5 md:gap-6">
                                            <div className="text-5xl md:text-6xl lg:text-7xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 p-3 bg-white/10 rounded-2xl">
                                                {dev.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{dev.name}</h3>
                                                <p
                                                    className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${dev.gradient} bg-clip-text text-transparent mb-4`}
                                                >
                                                    {dev.role}
                                                </p>
                                                <div
                                                    className={`h-1.5 w-16 bg-gradient-to-r ${dev.gradient} rounded-full mb-4 shadow-lg`}
                                                ></div>
                                                <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                                                    {dev.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🚀 Highlight: Goanny Section */}
                <div
                    className={`transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                >
                    <div className="relative max-w-3xl mx-auto text-center">
                        <div className="relative    p-10 md:p-14  ">
                            <div className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 rounded-full  shadow-lg mb-8">
                                <span className="text-2xl md:text-3xl">🚀</span>
                                <p className="text-white font-bold text-lg md:text-xl">Developed By</p>
                            </div>

                            {/* Clean Logo Section */}
                            <div className="flex justify-center mb-8">
                                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                                    <Image
                                        src={goannyLogo}
                                        alt="Goanny Logo"
                                        width={250}
                                        height={100}
                                        className="w-48 md:w-60 lg:w-72 h-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-300 mb-4">
                                Goanny Technologies Pvt. Ltd.
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 font-medium">
                                तंत्रज्ञान भागीदार (Technology Partner)
                            </p>
                            <div className="mt-6 h-1.5 w-40 md:w-52 mx-auto bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500 rounded-full shadow-lg"></div>

                            <div className="flex justify-center gap-4 mt-8 text-3xl md:text-4xl">
                                <span className="animate-bounce">✨</span>
                                <span className="animate-bounce delay-150">⭐</span>
                                <span className="animate-bounce delay-300">✨</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🙏 Special Thanks */}

            </div>
        </div>
    )
}
