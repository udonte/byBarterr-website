import { motion } from "framer-motion";
import Iphone3 from "@/assets/landing/iPhone13Pro.svg";
import phoneScreen from "@/assets/landing/phoneScreenshot.svg";

type Props = {};

const Showcase = (props: Props) => {
  return (
    <section className="px-4 py-12 lg:px-24 lg:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#1D242D] text-4xl lg:text-5xl font-semibold leading-tight"
          >
            Social media meets <br /> ecommerce
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#717171] text-base lg:text-lg max-w-md"
          >
            Lorem ipsum dolor sit amet consectetur. Magna magna sed porttitor
            quis suspendisse et vulputate mauris bibendum. Vulputate sed aliquet
            congue enim nec in.
          </motion.p>

          {/* Phone Showcase Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className="border border-gray-300 rounded-lg p-6 bg-white flex flex-col h-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F6F6F6] min-h-[375px] w-full rounded-lg overflow-hidden"
            >
              <img
                src={phoneScreen}
                alt="Phone Screenshot"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content below image */}
            <div className="flex flex-col justify-between h-full mt-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 mt-8"
              >
                <p className="text-[#1D242D] text-2xl font-semibold">
                  Discover our Powerful Mobile App
                </p>
                <p className="text-[#717171] text-sm">
                  Shop, Sell, and Swap On-the-Go with Ease!
                </p>
              </motion.div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1D242D",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="border border-gray-300 text-[#1D242D] rounded-md px-6 py-3 font-medium w-full md:w-fit mt-8"
              >
                Download now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Phone Mockup Only */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          className="border border-gray-300 rounded-lg p-6 bg-white flex flex-col h-full"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F6F6F6] min-h-[375px] w-full rounded-lg overflow-hidden"
          >
            <img
              src={Iphone3}
              alt="iPhone Mockup"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-between h-full mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3 mt-8"
            >
              <p className="text-[#1D242D] text-2xl font-semibold">
                With bybarterr app, you can now <br /> Swap Anything for
                Anything <br /> superfast
              </p>
              <p className="text-[#717171] text-sm">
                Lorem ipsum dolor sit amet consectetur. A pretium augue semper
                eget sollicitudin elementum. Praesent purus ultrices auctor
                viverra neque amet. Neque est quis eget purus at nisi.
              </p>
            </motion.div>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1D242D",
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="border border-gray-300 text-[#1D242D] rounded-md px-6 py-3 font-medium w-full md:w-fit mt-8"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
