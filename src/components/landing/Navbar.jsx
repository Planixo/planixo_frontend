import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import planixo from "../../assets/planixo-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur bg-blue-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={planixo} alt="Planixo Logo" className="h-9 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {["Brain AI", "Product", "Solutions", "Learn"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                {item} <ChevronDown size={14} />
              </button>
            ))}

            <a href="#" className="hover:text-blue-600 transition">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Enterprise
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Contact Sales
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-100 transition"
            >
              Login
            </a>

            <a
              href="#"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-50 border-t border-slate-200">
          <div className="px-4 py-6 space-y-4 text-sm font-medium text-slate-700">
            {["Brain AI", "Product", "Solutions", "Learn"].map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between py-2 hover:text-blue-600 transition"
              >
                {item} <ChevronDown size={14} />
              </button>
            ))}

            <a href="#" className="block py-2 hover:text-blue-600">
              Pricing
            </a>

            <a href="#" className="block py-2 hover:text-blue-600">
              Enterprise
            </a>

            <hr className="border-slate-200" />

            <a href="#" className="block py-2">
              Contact Sales
            </a>

            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-center bg-white hover:bg-blue-100 transition"
            >
              Login
            </a>

            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-center text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
