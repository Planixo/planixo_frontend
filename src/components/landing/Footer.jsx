import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import planixo from "../../assets/planixo-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  // ✅ Logo click handler
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com", label: "Facebook" },
    { Icon: Twitter, url: "https://www.twitter.com", label: "Twitter" },
    { Icon: Linkedin, url: "https://www.linkedin.com", label: "Linkedin" },
  ];

  return (
    <footer className="bg-blue-100 text-slate-800 pt-14 sm:pt-16 pb-8 sm:pb-10">
      
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* ✅ Clickable Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:col-span-2 md:col-span-1 lg:col-span-1 cursor-pointer"
          >
            <img
              src={planixo}
              alt="Planixo Logo"
              className="h-9 w-auto hover:scale-105 transition duration-300"
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

          <p className="text-xs sm:text-sm text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} Planixo. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ Icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  group
                  p-2 rounded-full bg-white
                  shadow
                  transition
                  hover:bg-blue-600
                  hover:scale-110
                "
              >
                <Icon
                  size={18}
                  className="text-blue-600 transition group-hover:text-white"
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
