import { motion } from "framer-motion";
import Books from "@/assets/landing/books.svg";
import Clothing from "@/assets/landing/clothing.svg";
import Electronics from "@/assets/landing/electronics.svg";
import Game from "@/assets/landing/game.svg";
import Laptop from "@/assets/landing/laptop.svg";
import Mobile from "@/assets/landing/mobile-phone.svg";
import Shoes from "@/assets/landing/shoes.svg";
import Swap from "@/assets/landing/swap.svg";
import DiscountImage from "@/assets/landing/DiscountImage.svg";

type CategoryItem = {
  id: number;
  icon: any;
  name: string;
  description: string;
};

const Categories = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      icon: Clothing,
      name: "Clothing",
      description: "Find all you need for occasions..",
    },
    {
      id: 2,
      icon: Books,
      name: "Books",
      description: "Textbooks, novels, and more..",
    },
    {
      id: 3,
      icon: Electronics,
      name: "Electronics",
      description: "Gadgets and devices for your needs..",
    },
    {
      id: 4,
      icon: Game,
      name: "Games",
      description: "Video games and accessories..",
    },
    {
      id: 5,
      icon: Laptop,
      name: "Laptops",
      description: "Powerful machines for work and play..",
    },
    {
      id: 6,
      icon: Mobile,
      name: "Phones",
      description: "Latest smartphones and accessories..",
    },
    {
      id: 7,
      icon: Shoes,
      name: "Footwear",
      description: "Sneakers, formal shoes, and more..",
    },
    {
      id: 8,
      icon: Swap,
      name: "Swap Items",
      description: "Trade items with other users..",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-4 pt-0 md:pt-[350px] py-8 lg:px-24 lg:py-24 bg-[#F9F9F9]">
      {/* categories */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              transition={{ type: "spring", stiffness: 200 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-light-blue/10 text-light-blue p-3 rounded-lg`}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-6 h-6"
                />
              </motion.div>
              <div className="overflow-hidden">
                <motion.p
                  whileHover={{ color: "#3b82f6" }}
                  className="font-semibold text-gray-800"
                >
                  {category.name}
                </motion.p>
                <p className="truncate text-xs text-gray-500">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* discount */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-stretch justify-center mt-16 rounded-2xl overflow-hidden bg-[#1D242D] shadow-lg"
      >
        {/* Image Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-2/5 relative min-h-[250px] md:min-h-[375px]"
        >
          <img
            src={DiscountImage}
            alt="Discount offer"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 md:py-12 md:px-16 flex flex-col justify-between">
          <div>
            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6 w-full md:w-[85%]"
            >
              25% Discount Lorem ipsum dolor sit amet consectetur. Eget massa
              elementum
            </motion.p>
          </div>

          <div className="mt-6 md:mt-0">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f3f4f6",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white hover:bg-gray-100 text-[#1D242D] rounded-lg w-full md:w-auto px-8 py-3 font-medium"
            >
              Get it now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Categories;
