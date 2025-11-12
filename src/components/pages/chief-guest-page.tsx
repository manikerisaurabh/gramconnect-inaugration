"use client"

import Image from "next/image"
import shankarbhau from "../../../public/shankarbhau.jpg"

export default function ChiefGuestsPage() {
    return (
        <div className="h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4 md:p-6 flex items-center justify-center relative overflow-hidden">
            {/* Enhanced animated background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Decorative corner patterns */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 w-12 h-12 md:w-16 md:h-16 border-t-3 border-l-3 border-emerald-400/40"></div>
            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-16 md:h-16 border-t-3 border-r-3 border-emerald-400/40"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-12 h-12 md:w-16 md:h-16 border-b-3 border-l-3 border-orange-400/40"></div>
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-12 h-12 md:w-16 md:h-16 border-b-3 border-r-3 border-orange-400/40"></div>

            <div className="max-w-7xl w-full relative z-10 h-full flex flex-col justify-between py-4">
                {/* Enhanced Header */}
                <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-600/15 to-amber-600/15 backdrop-blur-xl rounded-full border-2 border-emerald-600/30 shadow-lg mb-3">
                        <span className="text-xl md:text-2xl">👔</span>
                        <p className="text-emerald-800 font-bold text-sm md:text-base tracking-wide">मुख्य अतिथी</p>
                        <span className="text-xl md:text-2xl">⭐</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-2 leading-tight">
                        मुख्य अतिथी
                    </h1>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-transparent via-emerald-600/50 to-emerald-600/80 rounded-full"></div>
                        <p className="text-sm md:text-base text-gray-600 font-light italic">Chief Guest of Honor</p>
                        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-l from-transparent via-emerald-600/50 to-emerald-600/80 rounded-full"></div>
                    </div>
                </div>

                {/* Main Profile Card */}
                <div className="relative group flex-1 flex items-center mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>

                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-3 border-amber-200/60 w-full h-full">
                        <div className="grid lg:grid-cols-5 gap-0 h-full">
                            {/* Image Section */}
                            <div className="lg:col-span-2 relative h-64 md:h-80 lg:h-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-amber-600/10 z-10"></div>

                                <Image
                                    src={shankarbhau}
                                    alt="श्री. शंकरभाऊ मांडेकर"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    quality={100}
                                />

                                <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 border-t-4 border-l-4 border-amber-400 z-20"></div>
                                <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 border-t-4 border-r-4 border-amber-400 z-20"></div>
                                <div className="absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 border-b-4 border-l-4 border-amber-400 z-20"></div>
                                <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 border-b-4 border-r-4 border-amber-400 z-20"></div>

                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                    <div className="bg-white/95 backdrop-blur-xl rounded-xl p-3 shadow-xl border-2 border-amber-300/50">
                                        <p className="text-emerald-900 font-bold text-sm md:text-base text-center">
                                            🏛️ विधानसभा सदस्य
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30">
                                {/* Name */}
                                <div className="mb-6">
                                    <div className="inline-block bg-gradient-to-r from-emerald-600/10 to-amber-600/10 rounded-xl px-4 py-2 mb-3">
                                        <p className="text-emerald-700 font-semibold text-sm md:text-base">माननीय</p>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-700 bg-clip-text text-transparent mb-3 leading-tight">
                                        श्री. शंकरभाऊ मांडेकर
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-emerald-600 via-amber-500 to-orange-500 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Role Badge */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 shadow-xl">
                                        <span className="text-black font-bold text-base md:text-lg">आमदार</span>

                                    </div>
                                </div>

                                {/* Position */}
                                <div className="mb-5">
                                    <p className="text-gray-500 text-sm md:text-base mb-2 font-semibold">निवडणूक क्षेत्र</p>
                                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                        भोर, राजगड, मुळशी विधानसभा
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <p className="text-gray-500 text-sm md:text-base mb-2 font-semibold">कार्यक्षेत्र</p>
                                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                                        जनतेचे प्रतिनिधी आणि सामाजिक कार्यकर्ते
                                    </p>
                                </div>

                                {/* Decorative divider */}
                                <div className="relative mb-6">
                                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent"></div>
                                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-3">
                                        <span className="text-xl">✨</span>
                                    </div>
                                </div>

                                {/* Special Note */}
                                <div className="relative">
                                    <div className="flex items-start gap-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-2xl p-5 md:p-6 border-2 border-emerald-200/50 shadow-lg">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl md:text-3xl">🌟</span>
                                        </div>
                                        <div>
                                            <p className="text-emerald-900 font-bold text-lg md:text-xl mb-2">समारंभाचे मान्यवर व्यक्तिमत्व</p>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                विकास कार्यांच्या भूमिपूजन समारंभाचे मुख्य अतिथी व मार्गदर्शक
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Welcome Banner */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-emerald-600/30 to-emerald-500/30 rounded-2xl blur-xl"></div>

                    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 rounded-2xl p-5 md:p-7 border-2 border-amber-400/40 shadow-xl text-center">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <div className="inline-block mb-3">
                                <div className="text-4xl md:text-5xl">🎉</div>
                            </div>

                            <h3 className="text-xl md:text-3xl lg:text-4xl text-white font-bold mb-3 leading-tight">
                                सर्व नागरिकांचे मनःपूर्वक स्वागत आहे
                            </h3>

                            <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-white/40 rounded-full"></div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                </div>
                                <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-white/40 rounded-full"></div>
                            </div>

                            <p className="text-white/95 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                                या कार्यक्रमात सहभागी होण्यासाठी सर्व जनतेचे हार्दिक आमंत्रण. <span className="font-bold text-amber-300">आपला सहभागच या कार्यक्रमाचे खरे यश आहे.</span>
                            </p>

                            <div className="flex justify-center gap-3 mt-3">
                                <span className="text-2xl">✨</span>
                                <span className="text-2xl">🌟</span>
                                <span className="text-2xl">✨</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}