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
        <div className="min-h-screen bg-gradient-to-br from-white via-[#f8f8f8] to-white p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
            <div className="max-w-5xl w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-down-reveal">
                    <h2 className="text-5xl md:text-6xl font-bold text-[#1a5a3a] mb-4">विकासक टीम</h2>
                    <p className="text-xl text-[#666666]">Development Team Credits</p>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#1a5a3a]" />
                        <div className="w-2 h-2 rounded-full bg-[#e66d4e]" />
                        <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#1a5a3a]" />
                    </div>
                </div>

                {/* Developers Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {developers.map((dev, idx) => (
                        <div
                            key={idx}
                            className="group animate-scale-in"
                            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                        >
                            <div className="bg-white rounded-2xl p-8 border-2 border-[#1a5a3a]/10 shadow-lg hover:shadow-premium transition-all duration-300 transform hover:-translate-y-3 hover:border-[#d4a574] h-full">
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                        {dev.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-[#1a5a3a] mb-2">{dev.name}</h3>
                                        <p className="text-[#e66d4e] font-bold text-sm mb-3">{dev.role}</p>
                                        <p className="text-[#666666] leading-relaxed">{dev.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Thanks Section */}
                <div className="bg-gradient-to-r from-[#1a5a3a] to-[#2d8f5f] rounded-2xl p-12 border-2 border-[#d4a574]/50 shadow-premium mb-12 text-center animate-slide-up-reveal">
                    <h3 className="text-4xl font-bold text-[#d4a574] mb-6">विशेष आभार</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                        या प्रकल्पाच्या यशामध्ये सहभागी झालेल्या सर्व हितधारक, सहयोगी आणि विकासकांचे मनःपूर्वक आभार.
                        <br />
                        <span className="font-semibold text-white">ग्राम कनेक्ट</span> हे यश सर्वांच्या एकत्र प्रयत्नांचे फलित आहे.
                    </p>
                </div>

                {/* Made with Love + Goanny Logo */}
                <div className="text-center">
                    <p className="text-3xl text-[#1a5a3a] font-bold mb-4">❤️ प्रेम व समर्पणाने बनवले</p>
                    <p className="text-[#666666] text-lg mb-6">Made with ❤️ and Dedication</p>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-[#666666] text-base font-semibold">Developed by</span>
                        <Image
                            src={goannyLogo}
                            alt="Goanny Logo"
                            width={130}
                            height={50}
                            className="object-contain drop-shadow-md"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
