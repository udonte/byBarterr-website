import { motion } from "framer-motion";
import HeroImage from "@/assets/landing/heroImage.svg";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F3F7] pt-48">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen w-full bg-cover md:bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-3xl mx-auto text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#343766]"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Your Shopping
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Companion on the Go
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm md:text-lg text-[#343766]"
            >
              Buy, Sell, and Swap with Ease Anytime, Anywhere
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center mt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1D242D",
                  boxShadow: "0 5px 15px rgba(29, 36, 45, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-full md:w-fit bg-[#1D242D] text-white rounded-lg py-4 px-8 text-center cursor-pointer shadow-lg hover:bg-[#343766]"
              >
                <span>Download Now and Get Started</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
