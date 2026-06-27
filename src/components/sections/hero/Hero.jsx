import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroSocials from "./HeroSocials";

function Hero() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        {/* Main Hero Grid - Content & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8">
          {/* Left: Content */}
          <div>
            <HeroContent />
            <HeroSocials />
          </div>

          {/* Right: Image */}
          <div>
            <HeroImage />
          </div>
        </div>

        {/* Stats Section */}
        <HeroStats />
      </Container>
    </section>
  );
}

export default Hero;
