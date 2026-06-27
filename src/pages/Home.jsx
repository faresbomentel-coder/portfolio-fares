import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

function Home() {
  return (
    <Container className="py-20">
      <SectionTitle
        subtitle="Portfolio"
        title="Fares Bomentel"
        description="Développeur Full-Stack Web spécialisé en React, Laravel et applications web modernes."
      />

      <div className="flex gap-4 justify-center mb-8">
        <Button>Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      <Card className="max-w-md mx-auto text-center">
        <Badge>React Developer</Badge>
        <p className="mt-4 text-slate-600">
          Test des composants UI réutilisables.
        </p>
      </Card>
    </Container>
  );
}

export default Home;
