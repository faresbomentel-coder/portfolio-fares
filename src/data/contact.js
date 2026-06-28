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
  email: "ton-email@gmail.com",
  phone: "+212 6 XX XX XX XX",
  location: "Casablanca, Maroc",
  availability: {
    status: "available", // 'available' | 'busy' | 'unavailable'
    title: "Disponible pour un emploi",
    description:
      "Je suis activement à la recherche d'une opportunité professionnelle pour rejoindre une équipe dynamique et contribuer à des projets concrets et impactants.",
  },
};

export const contactSocials = [
  {
    id: "github",
    name: "GitHub",
    username: "ton-username",
    url: "https://github.com/ton-username",
    icon: FaGithub,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    username: "Fares Bomentel",
    url: "https://linkedin.com/in/ton-profile",
    icon: FaLinkedin,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    username: "+212 6 XX XX XX XX",
    url: "https://wa.me/2126XXXXXXXX",
    icon: FaWhatsapp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "email",
    name: "Email",
    username: "ton-email@gmail.com",
    url: "mailto:ton-email@gmail.com",
    icon: FaEnvelope,
    color: "text-red-600",
    bgColor: "bg-red-50",
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
