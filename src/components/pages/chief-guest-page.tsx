"use client"

import Image from "next/image"
import ajitdada from "../../../public/ajit.jpg"
import shankarbhau from "../../../public/shankarbhau.jpg"

export default function ChiefGuestsPage() {
    const chiefGuests = [
        {
            name: "मा. अजितदादा पवार",
            title: "Chief Minister",
            role: "माननीय मुख्यमंत्री, महाराष्ट्र राज्य",
            description: "राज्याचे मुख्यमंत्री, विकासाचे प्रणेते",
            img: ajitdada
        },
        {
            name: "श्री. शंकरभाऊ मांडेकर",
            title: "Chief Guest",
            role: "आंबावर-बोटदायगडळी विधानसभा सदस्य",
            description: "जनतेचे प्रतिनिधी आणि सामाजिक कार्यकर्ते",
            img: shankarbhau
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a5a3a]/5 via-white to-[#e66d4e]/5 p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
            <div className="max-w-5xl w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16 animate-slide-down-reveal">
                    <div className="inline-block mb-6">
                        {/* <div className="px-6 py-2 glass-effect rounded-full">
                            <p className="text-[#1a5a3a] font-semibold">👔 मुख्य अतिथी</p>
                        </div> */}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#1a5a3a] mb-4">मुख्य अतिथी</h2>
                    <p className="text-xl text-[#666666]">Chief Guests of Honor</p>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#1a5a3a]" />
                        <div className="w-2 h-2 rounded-full bg-[#e66d4e]" />
                        <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#1a5a3a]" />
                    </div>
                </div>

                {/* Guests Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {chiefGuests.map((guest, idx) => (
                        <div key={idx} className="group animate-scale-in" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-premium border-2 border-[#1a5a3a]/10 hover:border-[#d4a574] transition-all duration-500 transform hover:-translate-y-4 h-full">

                                {/* Guest Photo */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={guest.img}
                                        alt={guest.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                {/* Guest Info */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-[#1a5a3a] mb-2">{guest.name}</h3>
                                    <p className="text-[#e66d4e] font-bold text-lg mb-3">{guest.role}</p>
                                    <p className="text-[#666666] mb-6 leading-relaxed">{guest.description}</p>
                                    <div className="h-px bg-[#1a5a3a]/20 mb-6" />
                                    <p className="text-sm text-[#1a5a3a] italic font-semibold">✨ समारंभाचे मान्यवर व्यक्तिमत्व</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Special Note */}
                <div className="bg-gradient-to-r from-[#1a5a3a] to-[#2d8f5f] rounded-2xl p-10 border-2 border-[#d4a574]/50 shadow-premium text-center animate-slide-up-reveal">
                    <p className="text-4xl mb-4">🎉</p>
                    <p className="text-2xl text-white font-bold mb-4">सर्व नागरिकांचे मनःपूर्वक स्वागत आहे</p>
                    <p className="text-white/90 text-lg leading-relaxed">
                        या कार्यक्रमात सहभागी होण्यासाठी सर्व जनतेचे हार्दिक आमंत्रण.
                        आपला सहभागच या कार्यक्रमाचे खरे यश आहे.
                    </p>
                </div>
            </div>
        </div>
    )
}
