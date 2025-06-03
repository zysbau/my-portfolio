import { motion } from "framer-motion";

// Framer Motion variants for animations
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // Stagger animation for each child
//     },
//   },
// };

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

// Sample data for thoughts
const thoughtsData = [
  { title: "Thought One", date: "2024/12/10" },
  { title: "Thought Two", date: "2024/10/21" },
  { title: "Start", date: "2024/07/14" },
  // Add more thoughts here
];

export default function ThoughtsPage() {
  return (
    <>
      {/* Navigation Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 sm:mb-0">thoughts</h1>
        <nav className="flex gap-6 text-sm">
          {["about", "projects", "thoughts"].map((link, idx) => (
            <motion.a
              key={idx}
              href={link === "about" ? "/" : `/${link}`}
              whileHover={{ scale: 1.05 }}
              className={`relative pb-1 transition border-b-2 ${
                link === "thoughts"
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:text-white hover:border-white"
              }`}
            >
              {link}
            </motion.a>
          ))}
        </nav>
      </header>

      {/* Thought List */}
      <motion.main
        className="max-w-3xl mx-auto space-y-4" // Adjusted space-y for a slightly denser list
      >
        {thoughtsData.map((thought, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group flex justify-between items-center font-normal text-sm text-gray-400 hover:text-white transition-all duration-300 py-3"
          >
            <span className="overflow-hidden whitespace-nowrap overflow-ellipsis">
              {thought.title}
            </span>
            <span
              className="flex-grow h-2 mx-2 transition-all duration-300" // Adjusted margin for dots
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, // Larger, softer dots
                backgroundSize: "8px 100%", // Dot size (3px) + spacing (5px) = 8px pattern
                backgroundRepeat: "repeat-x",
                backgroundPosition: "center",
              }}
            ></span>
            <time className="tabular-nums text-gray-400 group-hover:text-white transition-all duration-300">
              {thought.date}
            </time>
          </motion.div>
        ))}
      </motion.main>
    </>
  );
}