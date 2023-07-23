import { motion } from "framer-motion";

export const SkeletonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 3 }}
      className="flex justify-center px-6 py-14 max-h-650 max-w-5xl m-auto overflow-hidden md:flex-col-reverse md:max-w-full md:max-h-full md:pb-8 dark:text-slate-100"
    >
      <div className="w-500 max-h-96 rounded-xl md:w-full bg-gray-300"></div>
      <div className="w-2/4 max-h-96 max-w-4xl pl-6 md:max-w-full md:w-full md:mb-4 md:max-h-full md:pl-0">
        <div className="h-8 bg-gray-300 w-1/2 mb-2"></div>
        <div className="h-8 bg-gray-300 w-4/5 mb-2"></div>
        <div className="h-8 bg-gray-300 w-2/3 mb-2"></div>
        <div className="h-8 bg-gray-300 w-3/4 mb-2"></div>
        <div className="h-8 bg-gray-300 w-1/3 mb-2"></div>
        <div className="h-8 bg-gray-300 w-4/5"></div>
      </div>
    </motion.div>
  );
};
