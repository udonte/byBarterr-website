import React from "react";
import DavioSwap1 from "@/assets/landing/DavioSwap.svg";
import DavioSwap2 from "@/assets/landing/DavioSwap1.svg";
import DavioSwap3 from "@/assets/landing/DavioSwap2.svg";

import { motion } from "framer-motion";

type Props = {};

const Swap = (props: Props) => {
  return (
    <section className="px-4 py-12 lg:px-24 lg:py-24 bg-[#F9F9F9] md:relative">
      <div className="md:absolute top-[-150px] left-0 right-0 w-full md:w-[80%] mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            className="rounded-lg p-4 bg-white flex flex-col h-fit"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F6F6F6] min-h-[200px] w-full rounded-lg overflow-hidden"
            >
              <img
                src={DavioSwap1}
                alt="Phone Screenshot"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Content below image */}
            <div className="flex flex-col  h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col  mt-2"
              >
                <p className="text-[#1D242D] text-2xl font-semibold">
                  Swap deals
                </p>
                <p className="text-[#717171] text-sm">
                  Women's Shoes from Coutgo, FISACE, and more
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* right */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className=" rounded-lg p-4 bg-white flex flex-col h-fit"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F6F6F6] h-[200px] w-full rounded-lg overflow-hidden"
              >
                <img
                  src={DavioSwap2}
                  alt="Phone Screenshot"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Content below image */}
              <div className="flex flex-col justify-between gap-2 h-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3 mt-4"
                >
                  <p className="text-[#1D242D] text-2xl font-semibold">Buy</p>
                  <p className="text-[#717171] text-xs">
                    Women's Shoes from Coutgo, FISACE, and more
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
                  className="border border-gray-300 text-white bg-[#1D242D] rounded-md px-6 py-3 font-medium w-full md:w-fit"
                >
                  Shop top deals
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="rounded-lg p-4 bg-white flex flex-col h-fit"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F6F6F6] min-h-[200px] w-full rounded-lg overflow-hidden p-4"
              >
                <img
                  src={DavioSwap3}
                  alt="Phone Screenshot"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Content below image */}
              <div className="flex flex-col justify-between gap-2 h-full ">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2 mt-4"
                >
                  <p className="text-[#1D242D] text-2xl font-semibold">Sell</p>
                  <p className="text-[#717171] text-xs">
                    Women's Shoes from Coutgo, FISACE, and more
                  </p>
                </motion.div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="border border-gray-300 bg-[#1D242D] text-white rounded-md px-6 py-3 font-medium w-full md:w-fit"
                >
                  Get started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swap;
