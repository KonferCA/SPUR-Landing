import { HalfEllipse } from "@assets";
const AboutSection: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen bg-radial-[at_50%_200%] from-[#1D252E] to-[#050B10] to-9]0%">
        {/* 4 Headers */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-6xl">
          <div className="flex gap-5 leading-relaxed">
            <h1 className="text-gradient">A</h1>
            <h1 className="text-gradient">Community</h1>
            <h1 className="text-gradient">Spurring</h1>
          </div>
          <div className="flex gap-5">
            <h1 className="text-gradient-reverse">Innovation</h1>
            <h1 className="text-gradient-reverse">and</h1>
            <h1 className="text-gradient-reverse">Enterprise</h1>
          </div>
        </div>
        <img className="absolute -top-8" src={HalfEllipse} />
      </section>
    </div>
  );
};

export { AboutSection };
