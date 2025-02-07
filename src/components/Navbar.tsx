import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
  );

  // const backdropBlur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 transition-colors duration-300 backdrop-blur-[0.5px]"
      style={{
        backgroundColor,
        // backdropFilter: `blur(${backdropBlur.get()}px)`,
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-bold font-clash">HAVEN</div>
        </motion.div>

        <motion.nav
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {["Features", "Technology", "Tokenomics", "Whitepaper"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-200 hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.nav>
      </div>

      {/* Border line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: useTransform(
            scrollY,
            [0, 100],
            [
              "linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(139, 92, 246, 0) 100%)",
              "linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(139, 92, 246, 0) 100%)",
            ]
          ),
        }}
      />
    </motion.header>
  );
};

export default Navbar;
