import Card from "../../ui/Card";
import { contactSocials } from "../../../data/contact";

function ContactSocials() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-slate-900 mb-4">Réseaux Sociaux</h3>
      <div className="space-y-3">
        {contactSocials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
            >
              <div
                className={`w-12 h-12 ${social.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                <Icon className={`${social.color} text-xl`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-900 font-semibold">{social.name}</p>
                <p className="text-slate-600 text-sm truncate">
                  {social.username}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          );
        })}
      </div>
    </Card>
  );
}

export default ContactSocials;
