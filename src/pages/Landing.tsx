import { Navbar, HeroSection } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-[#050B10] transition ease-in">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export { Landing };
