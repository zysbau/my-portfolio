import { motion } from "framer-motion";

// Animation variants
const itemVariants = {
  hidden: { y: 6, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 sm:mb-0">about</h1>
        <nav className="flex gap-6 text-sm">
          {["about", "projects", "thoughts"].map((link, idx) => (
            <motion.a
              key={idx}
              href={link === "about" ? "/" : `/${link}`}
              whileHover={{ scale: 1.05 }}
              className={`relative pb-1 transition border-b-2 ${
                link === "about" ? "border-white text-white" : "border-transparent text-gray-400 hover:text-white hover:border-white"
              }`}
            >
              {link}
            </motion.a>
          ))}
        </nav>
      </header>

      {/* About Section */}
      <motion.main 
        className="max-w-3xl mx-auto space-y-6"
        initial="hidden"
        animate="show"
        variants={itemVariants}
      >
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I&apos;m Mantas. I&apos;m an industrial design student with a passion for technology,
          visual systems, and building clean, simple interfaces. I use design to solve real-world
          problems, and I&apos;m always exploring tools like React, Framer Motion, and Tailwind to
          bring ideas to life.
        </p>
      </motion.main>
    </>
  );
}