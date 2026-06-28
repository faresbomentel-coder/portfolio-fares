import Card from "../../ui/Card";
import { contactDetails } from "../../../data/contact";

function ContactInfo() {
  return (
    <Card>
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        Informations de Contact
      </h3>
      <div className="space-y-4">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          const content = (
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <Icon className="text-blue-600 dark:text-cyan-400 text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{detail.label}</p>
                <p className="text-slate-900 dark:text-slate-100 font-medium break-words">
                  {detail.value}
                </p>
              </div>
            </div>
          );

          return detail.href ? (
            <a
              key={detail.id}
              href={detail.href}
              className="block hover:opacity-80 transition-opacity"
            >
              {content}
            </a>
          ) : (
            <div key={detail.id}>{content}</div>
          );
        })}
      </div>
    </Card>
  );
}

export default ContactInfo;
