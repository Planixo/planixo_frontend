import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import planixo from "../../assets/planixo-logo.png";

const dropdownItems = {
  "Brain AI": ["Overview", "AI Features", "Automation"],
  Product: ["Features", "Integrations", "Security"],
  Solutions: ["Startups", "Enterprise", "Agencies", "Global Teams"],
  Learn: ["Blog", "Docs", "Tutorials"],
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navigate = useNavigate();

  // ✅ Logo click handler
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* ✅ Logo with Scroll to Top */}
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={planixo}
              alt="Planixo Logo"
              className="h-9 w-auto"
            />
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

            {Object.keys(dropdownItems).map((item) => (
              <div key={item} className="relative group">

                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                  {item}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div
                  className="
                    absolute left-0 top-full mt-4
                    w-56
                    rounded-2xl
                    bg-gradient-to-br from-white to-blue-50
                    shadow-2xl
                    border border-blue-100
                    p-3
                    opacity-0 invisible translate-y-2
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-300 ease-out
                  "
                >
                  {dropdownItems[item].map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="
                        block px-4 py-2 rounded-lg text-sm
                        text-slate-600
                        hover:bg-blue-100 hover:text-blue-700
                        transition-all duration-200
                      "
                    >
                      {subItem}
                    </a>
                  ))}
                </div>

              </div>
            ))}

            <a href="#" className="hover:text-blue-600 transition">
              Pricing
            </a>

          </div>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div className="hidden md:flex items-center gap-4">

            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Contact Sales
            </a>

            <NavLink
              to="/login"
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-100 transition"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="
                px-4 py-2 rounded-lg text-sm font-semibold text-white 
                bg-gradient-to-r from-blue-600 to-cyan-500 
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
              "
            >
              Sign Up
            </NavLink>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="px-4 py-6 space-y-4 text-sm font-medium text-slate-700">

            {Object.keys(dropdownItems).map((item) => (
              <div key={item}>

                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item ? null : item
                    )
                  }
                  className="flex w-full items-center justify-between py-2 hover:text-blue-600 transition"
                >
                  {item}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      mobileDropdown === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdown === item && (
                  <div className="pl-4 mt-2 space-y-2">
                    {dropdownItems[item].map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block py-1 text-slate-600 hover:text-blue-600 transition"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}

              </div>
            ))}

            <a href="#" className="block py-2 hover:text-blue-600">
              Pricing
            </a>

            <hr className="border-slate-200" />

            <a href="#" className="block py-2">
              Contact Sales
            </a>

            <NavLink
              to="/login"
              className="block py-2 px-4 rounded-lg text-center bg-blue-50 hover:bg-blue-100 transition"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="block py-2 px-4 rounded-lg text-center text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition"
            >
              Sign Up
            </NavLink>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
