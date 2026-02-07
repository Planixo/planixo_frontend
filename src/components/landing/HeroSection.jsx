import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        relative w-full
        min-h-screen
        bg-[url('/src/assets/herobackground.png')]
        bg-cover bg-center
      "
    >
      {/* Overlay for readability on mobile */}
      <div className="absolute inset-0 bg-white/70 sm:bg-transparent" />

      <div className="
        relative z-10
        max-w-7xl mx-auto
        px-4 sm:px-6 md:px-14
        py-16 sm:py-20 lg:py-24
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-14
        items-center
      ">
        {/* LEFT: Content */}
        <div>
          {/* Headline */}
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold leading-tight
            text-slate-900
          ">
            The All-in-One Project Management Platform for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              High-Performing Teams
            </span>
          </h1>

          {/* Subheadline */}
          <p className="
            mt-5 sm:mt-6
            text-base sm:text-lg
            text-slate-600
            max-w-xl
          ">
            Plan, track, collaborate, and deliver projects faster with real-time
            visibility, automation, and powerful analytics.
          </p>

          {/* CTA Group */}
          <div className="
            mt-8 sm:mt-10
            flex flex-col sm:flex-row
            items-start sm:items-center
            gap-4
          ">
            <button className="
              w-full sm:w-auto
              px-6 py-3
              rounded-xl
              bg-gradient-to-r from-blue-600 to-cyan-500
              text-white font-medium
              shadow-lg shadow-blue-500/30
              hover:shadow-xl hover:shadow-blue-500/40
              transition
            ">
              Start Free Trial
            </button>

            <button
              className="
                w-full sm:w-auto
                px-6 py-3 rounded-xl font-medium
                text-indigo-900
                bg-gradient-to-r from-indigo-400/30 to-purple-400/30
                backdrop-blur-xl
                border border-indigo-300/40
                shadow-lg shadow-indigo-500/20
                hover:from-indigo-400/45 hover:to-purple-400/45
                hover:shadow-xl hover:shadow-indigo-500/30
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Request Demo
            </button>

            <button
              className="
                w-full sm:w-auto
                px-6 py-3 rounded-xl font-medium
                text-indigo-900
                bg-gradient-to-r from-indigo-400/30 to-purple-400/30
                backdrop-blur-xl
                border border-indigo-300/40
                shadow-lg shadow-indigo-500/20
                hover:from-indigo-400/45 hover:to-purple-400/45
                hover:shadow-xl hover:shadow-indigo-500/30
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              View Features →
            </button>
          </div>

          {/* Trust badges */}
          <div className="
            mt-8 sm:mt-10
            flex flex-col sm:flex-row
            gap-4 sm:gap-6
            text-sm text-slate-500
          ">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-white shadow flex items-center justify-center">
                🔒
              </div>
              <span>ISO 27001 Certified</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-white shadow flex items-center justify-center">
                🛡️
              </div>
              <span>Enterprise-grade Security</span>
            </div>
          </div>
        </div>

        {/* RIGHT column intentionally empty (future illustration / dashboard preview) */}
      </div>
    </section>
  );
};

export default HeroSection;
