import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Smart Team Collaboration",
    desc: "Bring teams, managers, and stakeholders into one collaborative workspace.",
    extra:
      "Enable role-based access, real-time updates, team chat, and AI-powered task suggestions for faster execution.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Centralized Project Tracking",
    desc: "Manage tasks, deadlines, and progress from one unified dashboard.",
    extra:
      "Track milestones, monitor performance, visualize timelines, and reduce delays using predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "AI Workflow Automation",
    desc: "Automate repetitive project tasks and optimize resource allocation.",
    extra:
      "AI analyzes workload, predicts risks, suggests improvements, and helps teams deliver projects faster.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];

export default function AiFoundation() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Intelligent Project Management Platform
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Plan smarter, collaborate faster, and deliver projects on time with
            AI-powered insights, automation, and real-time team coordination.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          {cards.map((card, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  flex: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="
                  relative
                  rounded-2xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  cursor-pointer
                  min-h-[480px]
                  group
                "
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <motion.div
                    animate={{
                      background: isActive 
                        ? "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.75) 60%, rgba(15, 23, 42, 0.3) 100%)"
                        : "linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.5) 60%, rgba(15, 23, 42, 0.2) 100%)"
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  
                  <motion.div
                    animate={{
                      y: isActive ? -10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {card.title}
                    </h3>

                    <p className="text-slate-200 text-base leading-relaxed">
                      {card.desc}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        height: isActive ? "auto" : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-slate-300 leading-relaxed border-t border-slate-600 pt-4">
                        {card.extra}
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    animate={{
                      width: isActive ? "60px" : "40px",
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-1 bg-blue-500 mt-6 rounded-full"
                  />
                  
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
