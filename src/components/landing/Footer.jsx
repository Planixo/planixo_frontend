import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import planixo from "../../assets/planixo-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  // Logo click -> Home + Scroll top
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Social Links
  const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com", label: "Facebook" },
    { Icon: Twitter, url: "https://www.twitter.com", label: "Twitter" },
    { Icon: Linkedin, url: "https://www.linkedin.com", label: "Linkedin" },
  ];

  // Footer Sections
  const footerSections = [
    ["Company", ["About Us", "Leadership", "Careers", "Security", "News"]],
    ["Products", ["Desk", "Chat", "Workspaces", "Integrations", "API"]],
    ["Solutions", ["Marketing", "Product", "IT Services", "Agencies"]],
    ["Resources", ["Blog", "Guides", "Templates", "Academy"]],
    ["Compare", ["Vs Asana", "Vs Trello", "Vs ClickUp", "Vs Monday"]],
  ];

  return (
    <footer className="bg-blue-100 text-slate-800 pt-12 sm:pt-14 md:pt-16 pb-8">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            gap-8
          "
        >

          {/* LOGO */}
          <div
            onClick={handleLogoClick}
            className="
              col-span-2
              sm:col-span-3
              md:col-span-2
              lg:col-span-1
              flex
              justify-center
              lg:justify-start
              cursor-pointer
            "
          >
            <img
              src={planixo}
              alt="Planixo Logo"
              className="h-9 w-auto hover:scale-105 transition duration-300"
            />
          </div>

          {/* FOOTER LINKS */}
          {footerSections.map(([title, items]) => (
            <div key={title} className="text-center sm:text-left">
              <h4 className="text-slate-900 font-semibold mb-3 text-sm sm:text-base">
                {title}
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm">
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

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-300 mt-10 pt-6">
        <div
          className="
            max-w-7xl mx-auto px-4 sm:px-6
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >

          {/* COPYRIGHT */}
          <p className="text-xs sm:text-sm text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} Planixo. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div
            className="
              flex flex-wrap
              justify-center md:justify-end
              gap-3
            "
          >
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
