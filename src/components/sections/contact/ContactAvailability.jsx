import { FaCheckCircle } from "react-icons/fa";
import { contactInfo } from "../../../data/contact";

function ContactAvailability() {
  const { availability } = contactInfo;

  return (
    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaCheckCircle className="text-2xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{availability.title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            {availability.description}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Disponible immédiatement</span>
        </div>
      </div>
    </div>
  );
}

export default ContactAvailability;
