const HeroSection: React.FC = () => {
  return (
    <div>
      <section>
        {/* 4 Headers */}
        <div>
          <h1>Innovative</h1>
          <h1>Resource</h1>
        </div>
        <div>
          <h1>Strategic</h1>
          <h1>Advantages</h1>
        </div>
        {/* Stats and Building */}
        <div>
          {/* subdiv: left callout */}
          <div>
            <p>
              Advanced solutions for technology and innovation-focused companies
            </p>
            <button>Learn more</button>
          </div>
          {/* subdiv: building image*/}
          <div>image</div>
          {/* subdiv: right stats */}
          <div>
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
