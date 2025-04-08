import { motion } from "framer-motion";
import Faq from "@/components/Faq";
import MessageIcon from "@/assets/contact/mark_email_read.svg";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section>
      <div className="bg-gray-100 pt-16 pb-2 min-h-screen">
        <div className="w-full md:max-w-5xl mx-auto px-4 my-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="my-24 mx-auto text-center flex flex-col items-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-16 text-[#1D242D]"
            >
              Get in touch with us
            </motion.h1>

            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <motion.div
                whileHover={{ boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}
                className="bg-white border border-gray-300 p-4 rounded-lg w-full"
              >
                {/* name and email */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-center gap-4 mb-4"
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#1D242D",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Name"
                    className="w-full py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none"
                  />
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#1D242D",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Email"
                    className="w-full py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </motion.div>

                {/* option */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-4"
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#1D242D",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Select an option"
                    className="w-full py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </motion.div>

                {/* reason */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-4"
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#1D242D",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Reason"
                    className="w-full py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </motion.div>

                {/* message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <motion.textarea
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#1D242D",
                    }}
                    transition={{ duration: 0.2 }}
                    rows={5}
                    cols={54}
                    placeholder="Message"
                    className="w-full py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </motion.div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(29, 36, 45, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-full md:w-fit bg-[#1D242D] text-white flex items-center justify-center gap-2 rounded-lg py-4 px-8 text-center"
                >
                  <motion.img
                    src={MessageIcon}
                    alt="message"
                    whileHover={{ rotate: 5 }}
                  />
                  <span>Submit</span>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      <Faq />
    </section>
  );
};

export default Contact;
