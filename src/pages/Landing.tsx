import { Navbar, HeroSection, AboutSection } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-[#050B10] transition ease-in">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};

export { Landing };
