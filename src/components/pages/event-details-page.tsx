"use client"

export default function EventDetailsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
            {/* Animated decorative background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-56 h-56 md:w-64 md:h-64 bg-amber-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-emerald-400/40"></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 border-t-4 border-r-4 border-emerald-400/40"></div>

            <div className="max-w-6xl w-full relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 md:gap-3 px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-emerald-600/10 to-amber-600/10 backdrop-blur-sm rounded-full border border-emerald-600/20 shadow-lg mb-6">
                        <span className="text-xl md:text-2xl">📅</span>
                        <p className="text-emerald-800 font-bold text-sm sm:text-base md:text-lg tracking-wide">कार्यक्रम तपशील</p>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight px-4">
                        अभिनंदन समारंभ
                    </h1>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-emerald-600/50"></div>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light italic">Event Details</p>
                        <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-emerald-600/50"></div>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Enhanced Event Image */}
                <div className="mb-8 md:mb-12 group">
                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-amber-200/50 transition-all duration-500 group-hover:ring-amber-300/80 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        {/* <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-12%20at%2010.07.45_68e41ed2-FkCHkMMOmqdCrfWtSuOADLLQFQhci7.jpg"
                            alt="Event Poster"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        /> */}
                        {/* Corner decorations on image */}
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-amber-400/80 z-20"></div>
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 border-t-4 border-r-4 border-amber-400/80 z-20"></div>
                        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 w-8 h-8 md:w-12 md:h-12 border-b-4 border-l-4 border-amber-400/80 z-20"></div>
                        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-amber-400/80 z-20"></div>
                    </div>
                </div>

                {/* Enhanced Event Info Grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
                    {/* Date & Time Card */}
                    <div className="group relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-600/5 rounded-full blur-2xl group-hover:bg-emerald-600/10 transition-colors duration-500"></div>

                        <div className="relative flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <span className="text-3xl md:text-4xl">📅</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2 md:mb-3 flex items-center gap-2">
                                    तारीख व वेळ
                                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                </h3>
                                <p className="text-gray-800 font-bold text-base md:text-lg mb-1">बुधवार, दि. 12/11/2025</p>
                                <p className="text-gray-600 text-base md:text-lg flex items-center gap-2">
                                    <span className="text-lg md:text-xl">🕙</span>
                                    सकाळी 10:00 AM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="group relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-600/5 rounded-full blur-2xl group-hover:bg-orange-600/10 transition-colors duration-500"></div>

                        <div className="relative flex flex-col sm:flex-row items-start gap-4 md:gap-5">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <span className="text-3xl md:text-4xl">📍</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2 md:mb-3 flex items-center gap-2">
                                    स्थान
                                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                                </h3>
                                <p className="text-gray-800 font-bold text-base md:text-lg mb-1">पिंगुट, गाभस</p>
                                <p className="text-gray-600 text-base md:text-lg">तालुका: मुलशी, जिल्हा: पुणे</p>
                            </div>
                        </div>
                    </div>

                    {/* Event Theme Card - Full Width */}
                    <div className="md:col-span-2 group relative bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200/50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -bottom-20 -left-20 w-48 h-48 md:w-60 md:h-60 bg-amber-300/10 rounded-full blur-3xl"></div>
                        <div className="absolute -top-20 -right-20 w-48 h-48 md:w-60 md:h-60 bg-emerald-300/10 rounded-full blur-3xl"></div>

                        <div className="relative flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-all duration-500">
                                <span className="text-4xl md:text-5xl">🎯</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                                    कार्यक्रमाचा विषय
                                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                                    विविध विकास कामांचा भूमिपूजन समारंभ - गावीण भूमिरचना, नागरी सुविधा, आणि आधुनिक तंत्रज्ञान समन्वय
                                </p>
                            </div>
                        </div>

                        {/* Decorative bottom accent */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-orange-500"></div>
                    </div>
                </div>

                {/* Additional Event Highlights */}
                <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-amber-400/30 shadow-2xl mb-8 text-center relative overflow-hidden">
                    {/* Decorative background patterns */}
                    <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎊</div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-3 md:mb-4">सर्वांचे स्वागत आहे</h3>
                        <div className="h-px bg-white/30 max-w-md mx-auto mb-3 md:mb-4"></div>
                        <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2">
                            या महत्त्वाच्या कार्यक्रमात सहभागी होण्यासाठी सर्व जनतेचे हार्दिक आमंत्रण
                        </p>

                        {/* Decorative dots */}
                        <div className="flex justify-center gap-2 mt-4 md:mt-6">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Footer decoration */}
                <div className="flex justify-center">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}