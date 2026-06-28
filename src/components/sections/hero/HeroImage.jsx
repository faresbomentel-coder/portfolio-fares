import { motion } from "framer-motion";
import { personalInfo } from "../../../data/personalInfo";
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
        <div className="relative bg-white border-2 border-slate-200 rounded-3xl shadow-xl p-4 md:p-5">
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-lg">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroImage;
