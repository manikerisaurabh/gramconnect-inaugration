"use client"

import Image from "next/image"
import shankarbhau from "../../../public/shankarbhau.jpg"

export default function ChiefGuestsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
            {/* Enhanced animated background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-amber-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Decorative corner patterns */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-emerald-400/40 transition-all duration-500 hover:border-amber-400/60"></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 border-t-4 border-r-4 border-emerald-400/40 transition-all duration-500 hover:border-amber-400/60"></div>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-16 h-16 md:w-20 md:h-20 border-b-4 border-l-4 border-orange-400/40 transition-all duration-500 hover:border-amber-400/60"></div>
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-orange-400/40 transition-all duration-500 hover:border-amber-400/60"></div>

            <div className="max-w-7xl w-full relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-emerald-600/15 to-amber-600/15 backdrop-blur-xl rounded-full border-2 border-emerald-600/30 shadow-xl mb-6 md:mb-8 hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl md:text-3xl">👔</span>
                        <p className="text-emerald-800 font-bold text-base sm:text-lg md:text-xl tracking-wide">मुख्य अतिथी</p>
                        <span className="text-2xl md:text-3xl">⭐</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight px-4 hover:scale-105 transition-transform duration-300">
                        मुख्य अतिथी
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-transparent via-emerald-600/50 to-emerald-600/80 rounded-full"></div>
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light italic">Chief Guest of Honor</p>
                        <div className="h-1 w-16 md:w-24 bg-gradient-to-l from-transparent via-emerald-600/50 to-emerald-600/80 rounded-full"></div>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/50" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/50" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                </div>

                {/* Spectacular Main Profile Card */}
                <div className="relative group mb-10 md:mb-16">
                    {/* Premium outer glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-amber-500/30 to-orange-500/30 rounded-[2rem] md:rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>

                    {/* Main card */}
                    <div className="relative bg-white rounded-3xl md:rounded-[3rem] overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] border-4 border-amber-200/60 group-hover:border-amber-300/80 transition-all duration-500">
                        <div className="grid lg:grid-cols-5 gap-0">
                            {/* Enhanced Image Section */}
                            <div className="lg:col-span-2 relative h-72 sm:h-96 md:h-[500px] lg:h-auto lg:min-h-[700px] overflow-hidden">
                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-transparent to-amber-600/20 z-10 group-hover:from-emerald-700/40 transition-all duration-700"></div>

                                <Image
                                    src={shankarbhau}
                                    alt="श्री. शंकरभाऊ मांडेकर"
                                    fill
                                    className="object-cover object-center transform group-hover:scale-110 transition-transform duration-1000"
                                    priority
                                    quality={100}
                                />

                                {/* Enhanced decorative corner accents with animation */}
                                <div className="absolute top-4 left-4 md:top-6 md:left-6 w-12 h-12 md:w-16 md:h-16 border-t-[6px] border-l-[6px] border-amber-400 z-20 group-hover:border-amber-300 group-hover:w-16 group-hover:h-16 md:group-hover:w-20 md:group-hover:h-20 transition-all duration-500"></div>
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 border-t-[6px] border-r-[6px] border-amber-400 z-20 group-hover:border-amber-300 group-hover:w-16 group-hover:h-16 md:group-hover:w-20 md:group-hover:h-20 transition-all duration-500"></div>
                                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-12 h-12 md:w-16 md:h-16 border-b-[6px] border-l-[6px] border-amber-400 z-20 group-hover:border-amber-300 group-hover:w-16 group-hover:h-16 md:group-hover:w-20 md:group-hover:h-20 transition-all duration-500"></div>
                                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-16 md:h-16 border-b-[6px] border-r-[6px] border-amber-400 z-20 group-hover:border-amber-300 group-hover:w-16 group-hover:h-16 md:group-hover:w-20 md:group-hover:h-20 transition-all duration-500"></div>

                                {/* Enhanced gradient overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

                                {/* Floating badge on image */}
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border-2 border-amber-300/50">
                                        <p className="text-emerald-900 font-bold text-lg md:text-xl text-center">
                                            🏛️ विधानसभा सदस्य
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Content Section */}
                            <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30">
                                {/* Name with enhanced styling */}
                                <div className="mb-8">
                                    <div className="inline-block bg-gradient-to-r from-emerald-600/10 to-amber-600/10 rounded-2xl px-4 py-2 mb-4">
                                        <p className="text-emerald-700 font-semibold text-sm md:text-base">माननीय</p>
                                    </div>
                                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-700 bg-clip-text text-transparent mb-4 leading-tight">
                                        श्री. शंकरभाऊ मांडेकर
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-emerald-600 via-amber-500 to-orange-500 rounded-full"></div>
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Role Badge */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 via-red-600 to-orange-600 rounded-full shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all duration-300">
                                        <span className="text-2xl md:text-3xl">🏛️</span>
                                        <span className="text-white font-bold text-base sm:text-lg md:text-xl">आमदार</span>
                                        <span className="text-2xl md:text-3xl">⭐</span>
                                    </div>
                                </div>

                                {/* Position with icon */}
                                <div className="mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <span className="text-2xl md:text-3xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm md:text-base mb-2 font-semibold">निवडणूक क्षेत्र</p>
                                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                                भोर, राजगड, मुळशी विधानसभा
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description with icon */}
                                <div className="mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <span className="text-2xl md:text-3xl">👥</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm md:text-base mb-2 font-semibold">कार्यक्षेत्र</p>
                                            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                                                जनतेचे प्रतिनिधी आणि सामाजिक कार्यकर्ते
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative divider */}
                                <div className="relative mb-8">
                                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-600/40 to-transparent"></div>
                                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-4">
                                        <span className="text-2xl">✨</span>
                                    </div>
                                </div>

                                {/* Enhanced Special Note */}
                                <div className="relative group/note">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover/note:blur-2xl transition-all duration-500"></div>
                                    <div className="relative flex items-start gap-4 bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-3xl p-6 md:p-8 border-2 border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <span className="text-3xl md:text-4xl">🌟</span>
                                        </div>
                                        <div>
                                            <p className="text-emerald-900 font-bold text-lg sm:text-xl md:text-2xl mb-3">समारंभाचे मान्यवर व्यक्तिमत्व</p>
                                            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                                                विकास कार्यांच्या भूमिपूजन समारंभाचे मुख्य अतिथी व मार्गदर्शक
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spectacular Welcome Banner */}
                <div className="relative group/banner">
                    {/* Outer glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 via-emerald-600/40 to-emerald-500/40 rounded-3xl md:rounded-[3rem] blur-2xl group-hover/banner:blur-3xl transition-all duration-700 animate-pulse"></div>

                    {/* Main banner */}
                    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 rounded-3xl md:rounded-[3rem] p-8 sm:p-10 md:p-14 lg:p-16 border-4 border-amber-400/40 shadow-2xl text-center">
                        {/* Animated background patterns */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                        <div className="relative z-10">
                            {/* Animated emoji */}
                            <div className="inline-block mb-6 md:mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-2xl animate-pulse"></div>
                                    <div className="relative text-6xl md:text-7xl lg:text-8xl animate-bounce">🎉</div>
                                </div>
                            </div>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 md:mb-8 leading-tight px-4">
                                सर्व नागरिकांचे मनःपूर्वक स्वागत आहे
                            </h3>

                            {/* Enhanced divider */}
                            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                                <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-transparent to-white/40 rounded-full"></div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-400/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-300 animate-pulse shadow-lg shadow-amber-300/50" style={{ animationDelay: '0.3s' }}></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-400/50" style={{ animationDelay: '0.6s' }}></div>
                                </div>
                                <div className="h-1 w-20 md:w-32 bg-gradient-to-l from-transparent to-white/40 rounded-full"></div>
                            </div>

                            <p className="text-white/95 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl mx-auto px-4 font-light">
                                या कार्यक्रमात सहभागी होण्यासाठी सर्व जनतेचे हार्दिक आमंत्रण.
                                <br className="hidden sm:block" />
                                <span className="font-bold text-amber-300">आपला सहभागच या कार्यक्रमाचे खरे यश आहे.</span>
                            </p>

                            {/* Decorative elements at bottom */}
                            <div className="flex justify-center gap-4 mt-8 md:mt-10">
                                <span className="text-3xl md:text-4xl animate-bounce">✨</span>
                                <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌟</span>
                                <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}