import { Navbar, HeroSection, AboutSection, ResourcesSection } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-[#050B10] transition ease-in">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResourcesSection />
      </main>
    </div>
  );
};

export { Landing };
