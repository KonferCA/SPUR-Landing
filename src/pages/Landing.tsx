import { Navbar, HeroSection } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-[#0D1A26] transition ease-in">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export { Landing };
