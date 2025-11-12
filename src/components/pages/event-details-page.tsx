"use client"

export default function EventDetailsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-3 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
            {/* Animated decorative background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-amber-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Corner decorations */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-8 md:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 border-t-2 sm:border-t-3 md:border-t-4 border-l-2 sm:border-l-3 md:border-l-4 border-emerald-400/40"></div>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-emerald-400/40"></div>

            <div className="max-w-4xl w-full relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-1 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-emerald-600/10 to-amber-600/10 backdrop-blur-sm rounded-full border border-emerald-600/20 shadow-lg mb-4 sm:mb-6">
                        <span className="text-lg sm:text-xl md:text-2xl">📅</span>
                        <p className="text-emerald-800 font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide">कार्यक्रम तपशील</p>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 leading-tight px-2 sm:px-4">
                        अभिनंदन समारंभ
                    </h1>

                    <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
                        <div className="h-px w-8 sm:w-10 md:w-12 lg:w-16 bg-gradient-to-r from-transparent to-emerald-600/50"></div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light italic">Event Details</p>
                        <div className="h-px w-8 sm:w-10 md:w-12 lg:w-16 bg-gradient-to-l from-transparent to-emerald-600/50"></div>
                    </div>

                    <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Enhanced Event Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-6 sm:mb-8 px-2 sm:px-0">
                    {/* Date & Time Card - Perfectly Aligned */}
                    <div className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-12 -right-12 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-600/5 rounded-full blur-xl group-hover:bg-emerald-600/10 transition-colors duration-500"></div>

                        <div className="relative flex flex-col items-center text-center gap-4 sm:gap-5">
                            {/* Icon */}
                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <span className="text-2xl sm:text-3xl md:text-4xl">📅</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-emerald-900 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                                    तारीख व वेळ
                                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                </h3>

                                <div className="space-y-3 sm:space-y-4">
                                    {/* Date */}
                                    <div className="bg-emerald-50/80 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-200">
                                        <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl mb-1">
                                            बुधवार, दि. 12/11/2025
                                        </p>
                                    </div>

                                    {/* Time */}
                                    <div className="flex items-center justify-center gap-3 sm:gap-4 bg-amber-50/80 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-200">
                                        <span className="text-xl sm:text-2xl md:text-2xl">🕙</span>
                                        <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl">
                                            सकाळी 10:00 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -top-12 -right-12 w-24 h-24 sm:w-32 sm:h-32 bg-orange-600/5 rounded-full blur-xl group-hover:bg-orange-600/10 transition-colors duration-500"></div>

                        <div className="relative flex flex-col items-center text-center gap-4 sm:gap-5">
                            {/* Icon */}
                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <span className="text-2xl sm:text-3xl md:text-4xl">📍</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 w-full">
                                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-emerald-900 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                                    स्थान
                                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                                </h3>

                                <div className="space-y-3 sm:space-y-4">
                                    {/* Main Location */}
                                    <div className="bg-orange-50/80 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-orange-200">
                                        <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl mb-1">
                                            पिंगुट, गाभस
                                        </p>
                                    </div>

                                    {/* Address Details */}
                                    <div className="bg-amber-50/80 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-200">
                                        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                                            तालुका: मुलशी, जिल्हा: पुणे
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Theme Card - Full Width */}
                    <div className="md:col-span-2 group relative bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200/50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-amber-300/10 rounded-full blur-2xl"></div>
                        <div className="absolute -top-12 -right-12 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-emerald-300/10 rounded-full blur-2xl"></div>

                        <div className="relative flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5 md:gap-6">
                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500">
                                <span className="text-3xl sm:text-4xl md:text-5xl">🎯</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent mb-3 sm:mb-4 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
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

                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border-2 border-amber-400/30 shadow-2xl mb-6 sm:mb-8 text-center relative overflow-hidden">
                    {/* Decorative background patterns */}
                    <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-xl"></div>

                    <div className="relative z-10">
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🎊</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-3 sm:mb-4">सर्वांचे स्वागत आहे</h3>
                        <div className="h-px bg-white/30 max-w-xs sm:max-w-md mx-auto mb-3 sm:mb-4"></div>
                        <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
                            या महत्त्वाच्या कार्यक्रमात सहभागी होण्यासाठी सर्व जनतेचे हार्दिक आमंत्रण
                        </p>

                        {/* Decorative dots */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Footer decoration */}
                <div className="flex justify-center">
                    <div className="flex gap-1.5 sm:gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-bounce"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}