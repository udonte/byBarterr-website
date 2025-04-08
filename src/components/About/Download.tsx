import { motion } from "framer-motion";
import Mobile from "@/assets/About/mobile-phone.svg";
import apple from "@/assets/About/apple-icon.svg";
import playstore from "@/assets/About/playstore-icon.svg";

type Props = {};

const Download = (props: Props) => {
  return (
    <section className="px-4 py-8 lg:px-24 lg:py-24 bg-[#F6F6F6]">
      <motion.div
        layout
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center gap-16 bg-white rounded-3xl p-8"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={Mobile}
            alt="Mobile App"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text + Buttons Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <p className="text-3xl lg:text-4xl font-semibold text-[#1D242D]">
            Download our app
          </p>
          <p className="text-[#717171] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Suspendisse nec volutpat
            neque morbi facilisi augue egestas. Lobortis in lorem pellentesque
            ut enim nec dolor. Bibendum mi non sed nibh commodo amet.
          </p>

          {/* Download Buttons */}
          <div className="space-y-4">
            <button className="w-full md:w-[300px] bg-[#1D242D] hover:bg-[#343A40] transition text-white flex items-center justify-center gap-3 rounded-lg py-4 px-6">
              <img src={apple} alt="Apple Store" className="w-6 h-6" />
              <span className="text-sm">Download on Apple Store</span>
            </button>
            <button className="w-full md:w-[300px] bg-[#1D242D] hover:bg-[#343A40] transition text-white flex items-center justify-center gap-3 rounded-lg py-4 px-6">
              <img src={playstore} alt="Play Store" className="w-6 h-6" />
              <span className="text-sm">Download on Play Store</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Download;
