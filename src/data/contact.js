import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

export const contactInfo = {
  email: "faresbomentel@gmail.com",
  phone: "+212 6 80 76 23 95",
  location: "Casablanca, Maroc",
  mobility: "Disponible pour travailler partout au Maroc.",

  availability: {
    status: "available",
    title: "Disponible pour un emploi",
    description:
      "Je suis disponible pour rejoindre une équipe et contribuer au développement d'applications web modernes. Ouvert aux opportunités partout au Maroc.",
  },
};

export const contactSocials = [
  {
    id: "github",
    name: "GitHub",
    username: "faresbomentel-coder",
    url: "https://github.com/faresbomentel-coder/",
    icon: FaGithub,
    color: "text-gray-900 dark:text-white",
    bgColor: "bg-gray-100 dark:bg-slate-800",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    username: "Fares Bomentel",
    url: "https://www.linkedin.com/in/fares-bomentel-07b975403/",
    icon: FaLinkedin,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-slate-800",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    username: "+212 6 80 76 23 95",
    url: "https://wa.me/212680762395",
    icon: FaWhatsapp,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-slate-800",
  },
  {
    id: "email",
    name: "Email",
    username: "faresbomentel@gmail.com",
    url: "mailto:faresbomentel@gmail.com",
    icon: FaEnvelope,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-slate-800",
  },
];

export const contactDetails = [
  {
    id: "email",
    label: "Email",
    value: contactInfo.email,
    icon: FaEnvelope,
    href: `mailto:${contactInfo.email}`,
  },
  {
    id: "phone",
    label: "Téléphone",
    value: contactInfo.phone,
    icon: FaPhone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
  },
  {
    id: "location",
    label: "Localisation",
    value: contactInfo.location,
    icon: FaMapMarkerAlt,
  },
  {
    id: "status",
    label: "Statut",
    value: contactInfo.availability.title,
    icon: FaBriefcase,
  },
];
