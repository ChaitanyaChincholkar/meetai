"use client";
export const HomeView = () => {

  //  return (
  //     <div >
  //       Home View
  //     </div>
  //   );
  // }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center py-12 md:py-20">
          <div className="grid w-full max-w-7xl gap-12 md:grid-cols-2 md:gap-8 lg:gap-16 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col space-y-6 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center md:justify-start">
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
                  🚀 AI-Powered Learning
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Meet AI – Your Personal{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI Mentor
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-600 sm:text-xl lg:text-2xl leading-relaxed">
                Join interactive sessions with specialized AI agents who guide you like experienced mentors. Get
                personalized answers, learn at your own pace, and master new skills with AI-powered teaching.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 md:justify-start justify-center pt-4">
                <button className="group relative inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Get Started
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Learn More
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Personalized Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Expert AI Agents</span>
                </div>
              </div>
            </div>

            {/* Right Section - Illustration Placeholder */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-[400px] w-full max-w-lg md:h-[500px] lg:h-[600px]">
                {/* Main card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl transform rotate-3 transition-transform hover:rotate-6" />

                {/* Content card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-xl">
                  {/* AI Avatar placeholder */}
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg">
                    <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>

                  {/* Chat bubbles */}
                  <div className="w-full space-y-4">
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-tr-sm bg-indigo-100 px-4 py-3 text-sm text-gray-700 shadow-sm max-w-[80%]">
                        How do I learn React?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3 text-sm text-gray-700 shadow-sm max-w-[80%]">
                        {`I'll guide you step by step! Let's start with components...`}
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.3s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.15s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-500" />
                    </div>
                    <span>AI Mentor is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}