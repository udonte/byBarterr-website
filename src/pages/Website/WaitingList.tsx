import { motion } from "framer-motion";
import HeroImage from "@/assets/landing/heroImage.svg";
import { Link } from "react-router";
import Logo from "@/assets/byBarterrLogo.svg";

type Props = {};

const WaitingList = (props: Props) => {
  return (
    <section className="bg-[#F2F3F7] px-4 py-8 lg:px-24 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <Link to={"/"} className="w-fit h-full">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={Logo}
            alt="logo"
            className=""
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#343766]"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Socio-Commerce
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                like never before
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm md:text-lg text-[#343766]"
            >
              byBarter offers a social, safe and interactive marketplace for P2P
              exchange of products, Join our waitlist now!
            </motion.p>

            {/* CTA Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mt-8"
            >
              <div className="w-full text-center">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex flex-col md:flex-row items-center gap-2"
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#343766",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Email"
                    className="w-full md:w-4/6 py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none text-gray-500 placeholder-gray-500 bg-white"
                  />
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="bg-primary-black text-white rounded-md w-full md:w-2/6 py-4 px-8 font-medium"
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WaitingList;
