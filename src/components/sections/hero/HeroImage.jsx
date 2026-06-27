import { motion } from "framer-motion";
import { HiUser } from "react-icons/hi";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Profile Image Placeholder */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl transform rotate-6 opacity-20"></div>

        {/* Main Card */}
        <div className="relative bg-white border-2 border-slate-200 rounded-3xl shadow-xl p-8 md:p-12">
          {/* Avatar Placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
            <HiUser className="text-blue-600 opacity-50" size={120} />
          </div>

          {/* Image Note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 italic">
              Photo de profil à venir
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroImage;