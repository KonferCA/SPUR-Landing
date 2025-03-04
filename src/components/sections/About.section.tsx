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
        <div className="absolute top-4/6 left-1/2 transform -translate-x-1/2 flex w-2/3">
          <h1 className="w-full text-end text-5xl pr-10 pt-4">Our Mandate</h1>
          <div className="flex flex-col items-start px-10">
            <p>
              Placerat maecenas aliquam primis duis viverra integer. Vehicula
              nulla bibendum facilisis per quis vehicula risus donec euismod.
              Curabitur aliquet sem vel fermentum lacinia. Aliquam sodales neque
              lorem, aliquam luctus tellus viverra ut.
            </p>
            <button className="mt-7 button-white">Learn more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { AboutSection };
