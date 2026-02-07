import React from "react";

/* Reusable circular node */
const CircleNode = ({ label, className }) => {
  return (
    <div
      className={`
        absolute hidden lg:flex
        items-center justify-center
        w-32 xl:w-36 h-32 xl:h-36
        rounded-full
        border border-cyan-300
        bg-white/40 backdrop-blur-md
        text-center text-xs xl:text-sm font-medium
        text-slate-800
        shadow-[0_0_25px_rgba(56,189,248,0.25)]
        transition-all duration-300
        hover:scale-110 hover:border-white hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]
        cursor-pointer
        ${className}
      `}
    >
      {label}
    </div>
  );
};

/* Mobile benefit card */
const MobileCard = ({ label }) => (
  <div className="bg-white/70 backdrop-blur-md border border-cyan-200 rounded-2xl p-5 text-center shadow-md">
    <p className="font-medium text-slate-800">{label}</p>
  </div>
);

const CoreBenefits = () => {
  const items = [
    "Ease of Communication 💬",
    "Real-time Schedule Tracking ⏱️",
    "Integrated Information & Files 📂",
    "Automated Record Maintenance 🤖",
    "Enhanced Team Orientation 🧭",
    "Smart Collaboration 🤝",
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cyan-50 via-sky-50 to-white overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.15)_1px,transparent_0)] [background-size:40px_40px]" />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Benefits of <span className="text-cyan-500">AI-Powered</span> Project
          Management
        </h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
          A centralized AI-first foundation that improves collaboration,
          productivity, and decision-making across teams.
        </p>
      </div>

      {/* DESKTOP / LARGE SCREENS – Diagram */}
      <div className="relative z-10 max-w-6xl mx-auto hidden lg:flex items-center justify-center">
        <div className="relative w-[680px] xl:w-[700px] h-[480px] xl:h-[500px] rounded-3xl bg-white/50 backdrop-blur-xl border border-cyan-200 shadow-[0_20px_80px_rgba(56,189,248,0.2)]">
          {/* Center hexagon */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div
              className="
                w-40 xl:w-44 h-40 xl:h-44
                flex items-center justify-center
                text-center font-bold
                text-slate-900
                bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400
                shadow-[0_0_45px_rgba(56,189,248,0.55)]
                ring-4 ring-white/70
              "
              style={{
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              }}
            >
              CORE
              <br />
              BENEFITS
            </div>
          </div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#67e8f9" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#67e8f9" />
            <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#67e8f9" />
            <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#67e8f9" />
            <line x1="50%" y1="50%" x2="30%" y2="85%" stroke="#67e8f9" />
            <line x1="50%" y1="50%" x2="70%" y2="85%" stroke="#67e8f9" />
          </svg>

          {/* Nodes */}
          <CircleNode
            label="Ease of Communication 💬"
            className="top-4 left-20"
          />
          <CircleNode
            label="Real-time Schedule Tracking ⏱️"
            className="top-4 right-20"
          />
          <CircleNode
            label="Integrated Information & Files 📂"
            className="top-1/2 -translate-y-1/2 left-4"
          />
          <CircleNode
            label="Automated Record Maintenance 🤖"
            className="top-1/2 -translate-y-1/2 right-4"
          />
          <CircleNode
            label="Enhanced Team Orientation 🧭"
            className="bottom-4 left-32"
          />
          <CircleNode
            label="Smart Collaboration 🤝"
            className="bottom-4 right-32"
          />
        </div>
      </div>

      {/* MOBILE / TABLET – Stacked layout */}
      <div className="relative z-10 lg:hidden max-w-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <MobileCard key={i} label={item} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-12 sm:mt-16 text-xs sm:text-sm text-slate-500 px-4">
        Trusted by modern teams & fast-growing startups worldwide 🌍
      </div>
    </section>
  );
};

export default CoreBenefits;
