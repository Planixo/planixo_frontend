import { motion } from "framer-motion";

const benefits = [
  {
    emoji: "⏱️",
    title: "Saves Time",
    slogan: "Less manual work, more execution",
    desc: "Automate planning, tracking, and reporting so your teams focus on what truly matters.",
  },
  {
    emoji: "🚀",
    title: "Improves Productivity",
    slogan: "Do more without doing more",
    desc: "AI-powered insights help teams prioritize tasks and eliminate bottlenecks.",
  },
  {
    emoji: "🧩",
    title: "Centralized Management",
    slogan: "Everything in one place",
    desc: "Tasks, files, people, timelines, and data — unified into a single intelligent workspace.",
  },
  {
    emoji: "💬",
    title: "Better Communication",
    slogan: "Clarity beats chaos",
    desc: "Real-time updates, shared context, and AI summaries keep everyone aligned.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#F8FAFF] to-[#EEF4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 text-lg sm:text-xl md:text-2xl font-bold"
          >
            Why teams choose Planixo
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mt-4"
          >
            Built to make teams{" "}
            <span className="text-blue-600">faster, smarter</span> and more aligned
          </motion.h2>

          <p className="text-slate-600 mt-4 sm:mt-5 text-sm sm:text-base">
            Planixo combines AI, automation, and clarity to help teams deliver
            projects with confidence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                bg-white rounded-3xl
                p-6 sm:p-7 lg:p-8
                border border-[#E5ECFF]
                shadow-sm
                transition relative overflow-hidden
                hover:shadow-xl hover:shadow-blue-500/10
                lg:hover:-translate-y-2
              "
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 hover:opacity-100 transition pointer-events-none" />

              <div className="text-3xl sm:text-4xl mb-4 sm:mb-5">
                {item.emoji}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-1">
                {item.title}
              </h3>

              <p className="text-blue-600 font-medium text-sm sm:text-base mb-3">
                {item.slogan}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-gradient-to-r from-blue-500 to-sky-400" />
            </motion.div>
          ))}
        </div>

        {/* Reviews / Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-20 lg:mt-24
            bg-gradient-to-br from-[#0F172A] via-[#0B1E3A] to-[#020617]
            rounded-3xl
            p-6 sm:p-8 lg:p-10
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between gap-8
            shadow-[0_20px_60px_rgba(2,6,23,0.6)]
            border border-white/10
          "
        >
          {/* Left */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white">
              Loved by fast-moving teams
            </h4>
            <p className="text-slate-300 mt-2 max-w-md text-sm sm:text-base">
              Teams report faster delivery and better collaboration within weeks.
            </p>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">4.9★</p>
              <p className="text-slate-400 text-sm">Average Rating</p>
            </div>

            <div className="h-10 w-px bg-white/20 hidden sm:block" />

            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">10k+</p>
              <p className="text-slate-400 text-sm">Teams Trust Planixo</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
