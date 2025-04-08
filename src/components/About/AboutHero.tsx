import { motion } from "framer-motion";
import HeroImage from "@/assets/About/AboutHeroImage.svg";

type Props = {};

const AboutHero = (props: Props) => {
  return (
    <section className="min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:max-w-4xl mx-auto my-20 md:text-center flex flex-col items-center px-8"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 text-[#1D242D]"
        >
          Lorem ipsum dolor sit amet consectetur. Iaculis porttitor neque.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg w-full"
        >
          Lorem ipsum dolor sit amet consectetur. Bibendum sed libero mauris sem
          turpis. Est porta rhoncus tristique adipiscing ac. Vitae vestibulum
          risus tristique scelerisque et. Volutpat elementum diam facilisi at
          urna sollicitudin orci scelerisque eu. Gravida morbi et cras nunc
          placerat. Porttitor scelerisque amet ipsum at.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#F2F3F7]"
      >
        <motion.img
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={HeroImage}
          alt="Hero Image"
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default AboutHero;
