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

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        

          {/* Right Column: Info, Socials & Availability */}
          <div className="space-y-6">
            <ContactAvailability />
            <ContactInfo />
            <ContactSocials />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
