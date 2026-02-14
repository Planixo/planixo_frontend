import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const teams = [
  {
    title: "Operations",
    description:
      "Accelerate approvals and collaborate seamlessly with standardized workflows.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Product Management",
    description:
      "Align product strategy with execution using custom workflows and visibility.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Marketing & Creative",
    description:
      "Plan campaigns, manage assets, and visualize workloads in one place.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    title: "Project Management Office",
    description:
      "Visualize progress, align OKRs, and standardize delivery across programs.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "IT & Engineering",
    description:
      "Streamline service requests, automate workflows, and maintain momentum.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Professional Services",
    description:
      "Track billable work, manage resources, and deliver client success.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

const TeamCollaboration = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      scrollRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#E0E8F1]">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          For teams of all shapes and sizes
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          Teams of 20 or 20,000 thrive with Planixo. Create workflows with
          complete visibility and collaboration.
        </p>
      </div>

      {/* Scroll Section */}
      <div className="relative mt-12 sm:mt-16">
        {/* Desktop arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow-md
                     items-center justify-center hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow-md
                     items-center justify-center hover:bg-gray-100"
        >
          <ChevronRight />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="
            flex gap-5 sm:gap-6 lg:gap-8
            overflow-x-auto
            px-4 sm:px-6
            scroll-smooth
            touch-pan-x
            no-scrollbar 
          "
        >
          {teams.map((team, index) => (
            <div
              key={index}
              className="
                min-w-[260px] sm:min-w-[300px] lg:min-w-[360px]
                max-w-[260px] sm:max-w-[300px] lg:max-w-[360px]
                h-[360px] sm:h-[380px] lg:h-[400px]
                bg-gray-50 rounded-3xl
                border border-transparent
                hover:border-green-500
                transition-all duration-300
                shadow-md hover:shadow-2xl
                flex flex-col
              "
            >
              {/* Text */}
              <div className="p-5 sm:p-6 lg:p-8 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {team.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {team.description}
                </p>
              </div>

              {/* Image */}
              <div className="h-44 sm:h-52 lg:h-64 overflow-hidden rounded-b-3xl">
                <img
                  src={team.image}
                  alt={team.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCollaboration;