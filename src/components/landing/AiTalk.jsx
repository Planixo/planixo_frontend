import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, X } from "lucide-react";

const AiTalk = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating AI Button */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 cursor-pointer"
      >
        <div className="w-20 sm:w-24 h-28 sm:h-32 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl flex flex-col items-center justify-center gap-2 sm:gap-3">
          <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <img
              src="https://i.pinimg.com/736x/35/2a/87/352a87dedea7a5d977fb2176142f41a2.jpg"
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white font-semibold text-xs sm:text-sm">
            Talk to AI
          </p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center"
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              className="
                w-full 
                sm:w-[420px] 
                md:w-[460px]
                h-[90vh] sm:h-[85vh]
                bg-gradient-to-br from-slate-950 via-slate-900 to-black
                rounded-t-3xl sm:rounded-3xl
                shadow-2xl
                flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm sm:text-base">
                  <Sparkles size={18} />
                  Planixo AI Assistant
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-red-400 transition"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-3 sm:p-4 overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-3">
                <div className="bg-slate-800/60 p-3 rounded-xl w-fit max-w-[90%] shadow">
                  🤖 Hi! I’m Planixo AI. How can I help you manage your project
                  better?
                </div>
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-white/10 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask Planixo AI..."
                  className="
                    flex-1 
                    bg-slate-800/70 
                    text-white 
                    rounded-xl 
                    px-3 sm:px-4 
                    py-2 sm:py-2.5 
                    text-sm
                    outline-none 
                    focus:ring-2 focus:ring-cyan-400
                  "
                />
                <button
                  className="
                    bg-gradient-to-br from-cyan-400 to-sky-500 
                    text-black 
                    px-3 sm:px-4 
                    rounded-xl 
                    flex items-center justify-center 
                    hover:opacity-90
                  "
                >
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiTalk;
