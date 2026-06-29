import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactSocials from "./ContactSocials";
import ContactAvailability from "./ContactAvailability";

function Contact() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <SectionTitle
          subtitle="Contactez-Moi"
          title="Restons en Contact"
          description="N'hésitez pas à me contacter pour discuter d'opportunités professionnelles ou de collaborations."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3">
              <ContactAvailability />
            </div>

            <div className="lg:col-span-1">
              <ContactInfo />
            </div>

            <div className="lg:col-span-2">
              <ContactSocials />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
