import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Open Ecosystem",
    desc: "Connect tools, teams, and AI models with powerful APIs and integrations.",
    extra:
      "Supports automation, third-party tools, and scalable extensions across your workflow.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Unified Data",
    desc: "One shared data layer across tasks, people, and timelines.",
    extra:
      "Ensures AI has full context to generate insights, predictions, and actions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Infinite Knowledge",
    desc: "Your system learns continuously from projects and decisions.",
    extra:
      "Improves recommendations, planning accuracy, and execution over time.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];

export default function AiFoundation() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full py-10 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="text-blue-600 font-semibold">
            AI-first foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-4">
            One open, connected, and{" "}
            <span className="text-blue-600">context-aware</span> foundation
          </h2>
          <p className="text-slate-600 mt-4">
            Built to give AI full context across people, data, and workflows.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div
          className="
            flex flex-col gap-6
            md:flex-row md:overflow-x-auto md:pb-4
            lg:overflow-visible
            lg:h-[300px]
          "
        >
          {cards.map((card, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  flex: isActive ? 2 : 1,
                  backgroundColor: isActive ? "#0F172A" : "#E0E8F1",
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="
                  relative rounded-3xl border border-[#E5ECFF]
                  p-8 cursor-pointer overflow-hidden
                  shadow-sm hover:shadow-xl
                  min-h-[260px]
                  md:min-w-[320px]
                  lg:min-w-0
                "
              >
                {/* Subtle Glow */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-blue-500/30 pointer-events-none"
                  />
                )}

                {/* Content */}
                <h3
                  className={`text-2xl font-semibold mb-3 transition-colors ${
                    isActive ? "text-white" : "text-[#0F172A]"
                  }`}
                >
                  {card.title}
                </h3>

                <p
                  className={`transition-colors ${
                    isActive ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {card.desc}
                </p>

                {/* Extra content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`mt-6 text-sm transition-colors ${
                    isActive ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {card.extra}
                </motion.div>

                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className={`
                    absolute bottom-6 right-6
                    w-28 h-28 md:w-36 md:h-36
                    object-cover rounded-2xl
                    transition-all duration-500
                    ${isActive ? "opacity-30 scale-105" : "opacity-80"}
                  `}
                />

                {/* Accent Line */}
                <motion.div
                  animate={{
                    width: isActive ? "100%" : "40%",
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


