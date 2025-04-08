import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import Subscribe from "./Subscribe";

type FAQItem = {
  question: string;
  answer: string;
};

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "The question",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Magna magna sed porttitor quis suspendisse et vulputate mauris bibendum. Vulputate sed aliquet congue enim nec in.",
    },
    {
      question: "The question",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Magna magna sed porttitor quis suspendisse et vulputate mauris bibendum. Vulputate sed aliquet congue enim nec in.",
    },
    {
      question: "The question",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Magna magna sed porttitor quis suspendisse et vulputate mauris bibendum. Vulputate sed aliquet congue enim nec in.",
    },
    {
      question: "The question",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Magna magna sed porttitor quis suspendisse et vulputate mauris bibendum. Vulputate sed aliquet congue enim nec in.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 my-32">
      <div className="md:max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-24 mx-auto text-center flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6 text-[#1D242D]"
          >
            Frequently Asked <br /> Questions (FAQs)
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 text-lg w-full md:w-[600px]"
          >
            Lorem ipsum dolor sit amet consectetur. Magna magna sed porttitor
            quis suspendisse et vulputate mauris bibendum. Vulputate sed
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-t first:border-t-0"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
            >
              <motion.button
                className={`w-full px-4 py-3 text-left font-medium text-primary-black flex items-center justify-between cursor-pointer ${
                  activeIndex === index ? "bg-[#DDDDDD]" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="py-2 font-semibold text-lg">{faq.question}</div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-[#717171]"
                >
                  <MdOutlineArrowDropDown />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-3 bg-white text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* subscribe */}
      <Subscribe />
    </section>
  );
}
