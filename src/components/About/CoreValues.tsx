import { motion } from "framer-motion";
import Game from "@/assets/About/sports_esports.svg";
import WavyLine from "@/assets/About/wavy-line.svg";
import Partner1 from "@/assets/About/Partner1.svg";
import QuoteTop from "@/assets/About/quoteTop.svg";
import QuoteBottom from "@/assets/About/quoteBottom.svg";

type CoreValue = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const CoreValues = () => {
  const coreValues: CoreValue[] = [
    {
      id: 1,
      icon: Game,
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pretium consectetur amet nunc aliquet nisl amet magna sodales. Integer id tellus facilisi augue.",
    },
    {
      id: 2,
      icon: Game,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, delivering exceptional results for our clients.",
    },
    {
      id: 3,
      icon: Game,
      title: "Collaboration",
      description:
        "Working together with transparency and trust to achieve shared success.",
    },
    {
      id: 4,
      icon: Game,
      title: "Integrity",
      description:
        "We do what's right, not what's easy, maintaining the highest ethical standards.",
    },
  ];

  return (
    <section className="px-4 py-8 lg:px-24 lg:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-primary-black text-5xl font-semibold mb-8"
      >
        Our core <span className="text-light-blue">values</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {coreValues.map((value) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border-[1px] border-gray-100 flex flex-col gap-4 p-4 rounded-2xl"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`bg-light-blue/10 p-4 w-fit rounded-xl`}
            >
              <img src={value.icon} alt={value.title} className="w-8 h-8" />
            </motion.div>
            <motion.p
              whileHover={{ color: "#3b82f6" }}
              className="font-bold text-lg"
            >
              {value.title}
            </motion.p>
            <div className="text-[#717171] text-sm leading-6 font-medium">
              {value.description}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* partners */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#1D242D] p-8 md:p-20 rounded-lg mt-24 flex flex-col md:flex-row gap-[100px]"
      >
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="w-fit"
          >
            <p className="text-white font-bold text-4xl mb-1">
              Hear from our partners
            </p>
            <motion.img
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              src={WavyLine}
              alt="wavy line"
              className="w-full"
            />
          </motion.div>

          {/* quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 relative"
          >
            <div className="text-white text-xl w-full md:w-[400px]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex mb-8"
              >
                <img src={QuoteTop} alt="quotetop" className="" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur. Suspendisse nec volutpat
                neque morbi facilisi augue egestas augue. Lobortis in lorem
                pellentesque ut enim nec dolor. Bibendum mi non sed nibh commodo
                amet.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm mt-4"
              >
                Tecno Mobile
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-end mt-8"
              >
                <img src={QuoteBottom} alt="quotebottom" className="" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img src={Partner1} alt="partner" className="w-full object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreValues;
