import { SpurBuilding } from "@assets";

const HeroSection: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen">
        {/* 4 Headers */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 text-7xl w-full flex gap-18 text-amber-500">
          <h1 className="flex-1 text-right">
            <span className="inline-block text-gradient">Innovative</span>
          </h1>
          <h1 className="flex-1 text-left">
            <span className="inline-block text-gradient">Resources</span>
          </h1>
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-7xl w-full flex gap-72">
          <h1 className="flex-1 text-right">
            <span className="inline-block text-gradient">Strategic</span>
          </h1>
          <h1 className="flex-1 text-left">
            <span className="inline-block text-gradient">Advantages</span>
          </h1>
        </div>
        {/* Stats and Building */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
          {/* subdiv: left callout */}
          <div className="flex flex-col items-end gap-5">
            <p className="text-right">
              Advanced solutions for technology and innovation-focused companies
            </p>
            <button className="w-fit">Learn more</button>
          </div>
          {/* subdiv: building image*/}
          <div className="">
            <img src={SpurBuilding} className="w-screen" alt="" />
          </div>
          {/* subdiv: right stats */}
          <div className="flex flex-col gap-5">
            <p>Companies utilizing resources</p>
            <h2>15K+</h2>
            <p>Tech workers</p>
            <h2>20K+</h2>
            <p>Community culture that nurtures collaboration and support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { HeroSection };
