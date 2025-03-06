import { Navbar, HeroSection, ResourcesSection } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-[#050B10] transition ease-in">
      <Navbar />
      <main>
        <HeroSection />
        <ResourcesSection />
      </main>
    </div>
  );
};

export { Landing };
