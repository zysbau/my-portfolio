import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

// Sample project data - you can add your projects here
const projectsData = [
  {
    title: "Project One",
    description: "A brief description of your first project. What it does, what technologies you used, and what you learned.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: "/project1.jpg", // Add your project images to the public folder
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project Two",
    description: "Description of your second project. Keep it concise but informative.",
    tags: ["Design", "Figma", "Prototyping"],
    imageUrl: "/project2.jpg",
    link: "https://github.com/yourusername/project2",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <>
      {/* Navigation Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4 sm:mb-0">projects</h1>
        <nav className="flex gap-6 text-sm">
          {["about", "projects", "thoughts"].map((link, idx) => (
            <motion.a
              key={idx}
              href={link === "about" ? "/" : `/${link}`}
              whileHover={{ scale: 1.05 }}
              className={`relative pb-1 transition border-b-2 ${
                link === "projects"
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:text-white hover:border-white"
              }`}
            >
              {link}
            </motion.a>
          ))}
        </nav>
      </header>

      {/* Projects Grid */}
      <motion.div
        className="max-w-3xl mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projectsData.map((project, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className="group"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-4 hover:opacity-90 transition-opacity"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {/* Placeholder text shown when image is not available */}
                  Project Image
                </div>
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs text-gray-400 bg-gray-800/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </>
  );
} 