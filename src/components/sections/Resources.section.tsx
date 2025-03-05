const ResourcesSection: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen bg-[#050B10] to-10%">
        <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-6xl">
          <div className="flex gap-5 leading-relaxed">
            <h1 className="text-gradient">Catalysts</h1>
            <h1 className="text-gradient">for</h1>
          </div>
          <div className="flex gap-5 -mt-5">
            <h1 className="text-gradient-reverse">Technological</h1>
            <h1 className="text-gradient-reverse">Advancements</h1>
          </div>
          <p className="text-center text-lg w-2/3 mt-8">
            SPUR lorem ipsum odor amet, consectetuer adipiscing elit. Dictum
            convallis nostra vel dui diam. Curabitur ex nunc quis sit.{" "}
          </p>
        </div>
        {/* Cards */}
        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 w-2/3 flex gap-10">
          <div className="border-1 border-amber-500 rounded-4xl p-8">
            <div className="flex w-full justify-between">
              <h1>Investments & Funding</h1>
              <p>icon</p>
            </div>
            <p>
              Placerat maecenas aliquam primis duis viverra integer. Vehicula
              nulla bibendum facilisis per quis vehicula risus donec euismod.
            </p>
          </div>

          <div className=" border-1 border-amber-500 rounded-4xl p-8">
            <div className="flex w-full justify-between">
              <h1>AI-Driven Data Centers</h1>
              <p>icon</p>
            </div>
            <p>
              Placerat maecenas aliquam primis duis viverra integer. Vehicula
              nulla bibendum facilisis per quis vehicula risus donec euismod.
            </p>
          </div>

          <div className="border-1 border-amber-500 rounded-4xl p-8">
            <div className="flex w-full justify-between">
              <h1>Office Spaces</h1>
              <p>icon</p>
            </div>
            <p>
              Placerat maecenas aliquam primis duis viverra integer. Vehicula
              nulla bibendum facilisis per quis vehicula risus donec euismod.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export { ResourcesSection };
