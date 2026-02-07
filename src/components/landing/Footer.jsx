import { Facebook, Twitter, Linkedin } from "lucide-react";
import planixo from "../../assets/planixo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-slate-800 pt-14 sm:pt-16 pb-8 sm:pb-10">
      
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <img
              src={planixo}
              alt="Planixo Logo"
              className="h-9 w-auto"
            />
          </div>

          {/* Footer Links */}
          {[
            ["Company", ["About Us", "Leadership", "Careers", "Security", "News"]],
            ["Products", ["Desk", "Chat", "Workspaces", "Integrations", "API"]],
            ["Solutions", ["Marketing", "Product", "IT Services", "Agencies"]],
            ["Resources", ["Blog", "Guides", "Templates", "Academy"]],
            ["Compare", ["Vs Asana", "Vs Trello", "Vs ClickUp", "Vs Monday"]],
          ].map(([title, items]) => (
            <div key={title} className="text-left">
              <h4 className="text-slate-900 font-semibold mb-3 text-sm sm:text-base">
                {title}
              </h4>
              <ul className="space-y-2 text-sm">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-slate-600 hover:text-slate-900 transition cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-300 mt-10 sm:mt-12 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} Planixo. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social link"
                className="
                  p-2 rounded-full bg-white
                  shadow
                  transition
                  hover:bg-blue-600
                  hover:scale-110
                "
              >
                <Icon
                  size={18}
                  className="text-blue-600 transition hover:text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
