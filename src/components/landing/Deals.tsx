import { motion, AnimatePresence } from "framer-motion";
import Phone from "@/assets/landing/PhonePro.svg";
import DiscountImage from "@/assets/landing/DiscountImage2.svg";
import Swap1 from "@/assets/landing/Swap1.svg";
import Swap2 from "@/assets/landing/Swap2.svg";

const dealItems = [
  {
    id: 1,
    title: "iPhone 3 Pro",
    img: Phone,
    price: "NGN 1,350,000.00",
    oldPrice: "NGN 1,200,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 2,
    title: "Samsung Galaxy Z Flip",
    img: Phone,
    price: "NGN 950,000.00",
    oldPrice: "NGN 1,000,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 3,
    title: "Google Pixel 7 Pro",
    img: Phone,
    price: "NGN 800,000.00",
    oldPrice: "NGN 880,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 4,
    title: "iPhone 3 Pro",
    img: Phone,
    price: "NGN 1,350,000.00",
    oldPrice: "NGN 1,200,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 5,
    title: "Samsung Galaxy Z Flip",
    img: Phone,
    price: "NGN 950,000.00",
    oldPrice: "NGN 1,000,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 6,
    title: "Google Pixel 7 Pro",
    img: Phone,
    price: "NGN 800,000.00",
    oldPrice: "NGN 880,000.00",
    swapStatus: "SWAP",
  },
];

const Deals = () => {
  return (
    <section className="px-4 py-12 lg:px-24 lg:py-24 bg-white">
      {/* STOCK 1 */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {dealItems.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-[#F6F6F6] p-8 rounded-lg shadow-md flex flex-col gap-4 text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-[#1D242D] bg-[#FFEB9D] w-fit px-2 py-1 rounded text-xs font-semibold mb-4"
              >
                {item.swapStatus}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4 }}
                className="flex items-center justify-center mb-4 w-full"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[230px] h-full object-cover"
                />
              </motion.div>
              <div className="flex flex-col items-start">
                <motion.h1
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="text-2xl font-semibold mb-4 text-[#1D242D]"
                >
                  {item.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.6 }}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <p className="text-[#343766] font-semibold">{item.price}</p>
                  <s className="text-xs text-[#717171]">{item.oldPrice}</s>
                </motion.div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#343766",
                    color: "#FFFFFF",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white border border-[#DDDDDD] text-sm text-[#1D242D] rounded-md w-full py-4 px-8 font-medium"
                >
                  Add to cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* SWAP ADVERT */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
      >
        {/* Left side with two stacked deals */}
        <div className="flex flex-col gap-4">
          {/* Deal 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-between gap-4 rounded-3xl bg-[#FFEB9D] px-8 pt-8 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 space-y-4"
            >
              <p className="text-4xl font-extrabold text-[#1D242D] ">
                Swap deals are back!!!
              </p>
              <p className="text-sm text-[#333]">Get iphone 14 with your 12.</p>
            </motion.div>
            <motion.img
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
              src={Swap1}
              alt="Discount offer"
              className="w-1/2 h-auto object-contain rounded overflow-hidden"
            />
          </motion.div>

          {/* Deal 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center gap-4 rounded-3xl bg-[#9DBEFF] p-4"
          >
            <div className="relative w-full">
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={Swap2}
                alt="Discount offer"
                className="w-4/5 h-auto object-cover rounded"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="w-[200px] md:w-[300px] absolute top-1/2 left-[130px] md:top-1/2 md:left-[250px] transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-lg flex flex-col items-center justify-center gap-4 text-center"
              >
                <p className="text-sm md:text-xl font-semibold text-white">
                  Get 50% discount on purchase
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border border-[#DDDDDD] text-xs text-[#1D242D] rounded-4xl w-fit py-2 px-4 font-medium"
                >
                  Start Shopping
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right side full image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full relative overflow-hidden rounded-lg"
        >
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={DiscountImage}
            alt="Discount offer"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* STOCK 2 */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        <AnimatePresence>
          {dealItems.slice(3, 6).map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-[#F6F6F6] p-8 rounded-lg shadow-md flex flex-col gap-4 text-center"
            >
              {/* <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-[#1D242D] bg-[#FFEB9D] w-fit px-2 py-1 rounded text-xs font-semibold mb-4"
              >
                {item.swapStatus}
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4 }}
                className="flex items-center justify-center mb-4 w-full"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[230px] h-full object-cover"
                />
              </motion.div>
              <div className="flex flex-col items-start">
                <motion.h1
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="text-2xl font-semibold mb-4 text-[#1D242D]"
                >
                  {item.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.6 }}
                  className="flex items-center justify-between w-full mb-4"
                >
                  <p className="text-[#343766] font-semibold">{item.price}</p>
                  {/* <s className="text-xs text-[#717171]">{item.oldPrice}</s> */}
                </motion.div>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#343766",
                    color: "#FFFFFF",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white border border-[#DDDDDD] text-sm text-[#1D242D] rounded-md w-full py-4 px-8 font-medium"
                >
                  Add to cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Deals;
