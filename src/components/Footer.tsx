import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-black/95 to-black/90 text-white py-16 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold ">About Haven</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Haven is a revolutionary crypto network focused on privacy,
              security, and decentralized solutions for digital assets.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {["Whitepaper", "Technology", "Use Cases", "Tokenomics"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm group transition-all duration-200"
                    >
                      <span className="h-px w-4 bg-gradient-to-r from-red-400 to-pink-600 transform origin-left group-hover:w-5 transition-all duration-200"></span>
                      <span>{item}</span>
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text ">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "FAQs", "Community", "Blog"].map((item) => (
                <motion.li
                  key={item}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white flex items-center space-x-2 text-sm group transition-all duration-200"
                  >
                    <span className="h-px w-4 bg-gradient-to-r from-red-400 to-pink-600 transform origin-left group-hover:w-5 transition-all duration-200"></span>
                    <span>{item}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold bg-clip-text ">
              Connect With Us
            </h3>
            <div className="flex flex-col space-y-3">
              {[
                {
                  name: "Follow on X",
                  href: "https://x.com/HavenCryptoNet",
                  icon: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
                },
                {
                  name: "Facebook",
                  href: "#",
                  icon: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-3 group transition-all duration-200"
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 200, damping: 10 },
                  }}
                >
                  <span className="bg-gradient-to-t p-2 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="transform  transition-transform"
                    >
                      <path d={social.icon} />
                    </svg>
                  </span>
                  <span className="text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-red-500/10 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Haven. All rights reserved.
          </p>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-32 left-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-red-400/5 to-pink-600/5 rounded-full blur-3xl transform -translate-x-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tl from-red-400/5 to-pink-600/5 rounded-full blur-3xl"
        />
      </div>
    </footer>
  );
};

export default Footer;
