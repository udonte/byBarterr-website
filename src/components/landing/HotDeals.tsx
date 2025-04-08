import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Phone from "@/assets/landing/PhonePro.svg";

type Props = {};

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
    title: "iPhone 14 Pro",
    img: Phone,
    price: "NGN 1,550,000.00",
    oldPrice: "NGN 1,400,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 5,
    title: "Samsung Galaxy S23",
    img: Phone,
    price: "NGN 1,050,000.00",
    oldPrice: "NGN 1,100,000.00",
    swapStatus: "SWAP",
  },
  {
    id: 6,
    title: "Google Pixel 8 Pro",
    img: Phone,
    price: "NGN 900,000.00",
    oldPrice: "NGN 980,000.00",
    swapStatus: "SWAP",
  },
];

const HotDeals = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= dealItems.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dealItems.length - 3 : prevIndex - 1
    );
  };

  // Get the current items to display (always 3 items)
  const visibleItems = dealItems.slice(currentIndex, currentIndex + 3);
  // If we're at the end and don't have 3 items, take from the beginning
  const itemsToShow =
    visibleItems.length < 3
      ? [...visibleItems, ...dealItems.slice(0, 3 - visibleItems.length)]
      : visibleItems;

  return (
    <section className="px-4 py-12 lg:px-24 lg:py-24 bg-white">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-semibold">Hot Deals</h1>

        <div>
          <button
            onClick={prevSlide}
            className="rounded-full bg-gray-300 p-2 mx-2 cursor-pointer text-white hover:bg-[#1D242D] transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-[#1D242D] p-2 mx-2 cursor-pointer text-white hover:bg-gray-700 transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        <AnimatePresence mode="wait">
          {itemsToShow.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-[#F6F6F6] p-8 rounded-lg shadow-md flex flex-col gap-4 text-center"
            >
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

export default HotDeals;
