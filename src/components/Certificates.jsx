import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Image fallbacks for certifications
import reactCert from "../assets/images/react-certificate.jpg";
import sqlCert from "../assets/images/sql-certificate.jpg";
import ResCert from "../assets/images/res-certificate.jpg";
import javascriptCert from "../assets/images/javascript-certificate.jpg";
import reactLogo from "../assets/images/reactjs-logo.svg";

/**
 * Certifications
 * - Show 3 certification cards at a time
 * - Left/Right arrows flanking the three-card area (not in the header)
 * - Horizontal slide animation (left/right)
 * - Card shows: image, title, description, completed date
 */
const defaultCerts = [
  {
    id: 1,
    title: "React JS",
    description:
      "This certification demonstrates proficiency in key concepts such as components, props, state management, React Hooks, routing, Context API, and API integration, validating my ability to build dynamic and responsive user interfaces efficiently",
    completedDate: "Feb 2023",
    link: "https://certificates.ccbp.in/intensive/react-js?id=SBLOIHWQZO",
    image: reactCert,
  },
  {
    id: 2,
    title: "SQL",
    description:
      "This certification demonstrates proficiency in key concepts such as database design, writing SQL queries, joins, indexing, normalization, and data manipulation, validating my ability to efficiently manage and interact with relational databases.",
    completedDate: "Oct 2023",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=QDSRVAMHYJ",
    image: sqlCert,
  },
  {
    id: 3,
    title: "Resposive Web Design",
    description:
      "Earned certification in Responsive Web Design, covering modern layout techniques like Flexbox. Built fully responsive and accessible web pages optimized for all devices and screen sizes.",
    completedDate: "Jan 2023",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=FOIKASFLPU",
    image: ResCert,
  },
  {
    id: 4,
    title: "JavaScript",
    description:
      "Earned certification in JavaScript, covering core concepts such as variables, functions, arrays, objects, loops, and ES6+ features. Gained hands-on experience building interactive and dynamic web applications.",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=ZLDKXXSPSK",
    completedDate: "Oct 2022",
    image: javascriptCert,
  },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

function Certifications({ items = defaultCerts }) {
  const [index, setIndex] = useState(0); // starting index of the visible window
  const [direction, setDirection] = useState(1); // 1 for next (left->right), -1 for prev (right->left)
  const [hoveredKey, setHoveredKey] = useState(null);
  const total = items.length;

  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      if (w < 768) return Math.min(1, total); // mobile
      if (w < 1024) return Math.min(2, total); // tablet
      return Math.min(3, total); // desktop
    }
    return Math.min(3, total);
  });

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      const count = w < 768 ? 1 : w < 1024 ? 2 : 3;
      setVisibleCount(Math.min(count, total));
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [total]);

  // Ensure index stays within range when visibleCount changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(total - visibleCount, 0)));
  }, [visibleCount, total]);
  const maxIndex = Math.max(total - visibleCount, 0);

  const visibleItems = useMemo(() => {
    const end = index + visibleCount;
    return items.slice(index, end > total ? total : end);
  }, [items, index, total, visibleCount]);

  const next = () => {
    if (total <= visibleCount) return;
    setDirection(1);
    setIndex((prev) => {
      const nextIndex = prev + visibleCount;
      return nextIndex >= total ? 0 : nextIndex;
    });
  };

  const prev = () => {
    if (total <= visibleCount) return;
    setDirection(-1);
    setIndex((prev) => {
      const nextIndex = prev - visibleCount;
      return nextIndex < 0 ? Math.max(total - visibleCount, 0) : nextIndex;
    });
  };

  // Auto-advance every 4 seconds; resets after each slide or interaction
  const autoAdvanceMs = 4000;
  useEffect(() => {
    if (total <= visibleCount) return;

    const id = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => {
        const nextIndex = prev + visibleCount;
        // Loop back to start if we reach the end
        return nextIndex >= total ? 0 : nextIndex;
      });
    }, autoAdvanceMs);

    return () => clearTimeout(id);
  }, [index, total, visibleCount]);

  // Link opener for cards
  const openLink = (url) => {
    if (!url) return;
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {}
  };

  return (
    <section id="certificates" className="pb-5 h-auto my-20 md:my-24 lg:my-28">
      {/* Heading row: centered title only */}

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Certificates
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-md:text-lg">
          My growth through certified courses
        </p>
      </motion.div>

      {/* Slider area with left/right arrows flanking the 3-card viewport */}
      <div className="relative max-w-6xl px-4">
        {/* Left arrow */}
        <button
          aria-label="Previous certifications"
          onClick={prev}
          disabled={index === 0} // disable if at start
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border text-gray-200 transition-all shadow
    ${
      index === 0
        ? "bg-gray-700/30 cursor-not-allowed border-gray-600/30"
        : "bg-gray-800/70 border-gray-700/60 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-500 hover:text-white shadow hover:shadow-indigo-500/20"
    }`}
        >
          <FaChevronLeft className="mx-auto" />
        </button>

        {/* Right arrow */}
        <button
          aria-label="Next certifications"
          onClick={next}
          disabled={index >= maxIndex} // disable if at last group
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border text-gray-200 transition-all shadow
    ${
      index >= maxIndex
        ? "bg-gray-700/30 cursor-not-allowed border-gray-600/30"
        : "bg-gray-800/70 border-gray-700/60 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-500 hover:text-white shadow hover:shadow-indigo-500/20"
    }`}
        >
          <FaChevronRight className="mx-auto" />
        </button>

        {/* Cards viewport with horizontal slide animation */}
        <div className="mx-2 md:mx-8 lg:mx-12">
          {/* create space so arrows don't overlay content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleItems.map((item, i) => (
                <motion.div
                  key={`${item.id}-${i}`}
                  role="link"
                  tabIndex={0}
                  className="relative rounded-2xl border border-gray-700/50 bg-gray-800/40 backdrop-blur-md overflow-hidden shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  animate={
                    hoveredKey === `${item.id}-${i}`
                      ? { y: -8, scale: 1.01 }
                      : { y: 0, scale: 1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  {/* Image header */}
                  <div
                    className="relative w-full aspect-[3/2] overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredKey(`${item.id}-${i}`)}
                    onMouseLeave={() => setHoveredKey(null)}
                    onClick={() => openLink(item.link)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") openLink(item.link);
                    }}
                  >
                    <img
                      src={item.image || reactLogo}
                      alt={`${item.title} certificate`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-5">
                    <div className="flex flex-col items-start gap-4">
                      <h3 className="text-2xl md:text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <span className="shrink-0 inline-flex items-center text-xs md:text-sm font-semibold px-3 py-1 rounded-full border border-sky-500/40 text-sky-300 bg-sky-500/10">
                        Completed: {item.completedDate}
                      </span>
                    </div>

                    <p className="mt-4 text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator below viewport */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: Math.ceil(total / visibleCount) }).map(
            (_, i) => {
              const isActive = Math.floor(index / visibleCount) === i;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i * visibleCount)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-sky-400 to-indigo-500 shadow shadow-indigo-500/30"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
