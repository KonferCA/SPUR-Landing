import { Button } from "@components";
import { Vexacool } from "@assets";
import { useState } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const CardComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Vexacool Project",
      description:
        "Placerat maecenas aliquam primis duis viverra integer. Vehicula nulla bibendum facilisis per quis vehicula risus donec euismod.",
      image: Vexacool,
    },
    {
      id: 2,
      title: "Project Alpha",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: Vexacool,
    },
    {
      id: 3,
      title: "TechZone Initiative",
      description:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.",
      image: Vexacool,
    },
  ];

  // Function to handle the next card in the carousel
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to handle the previous card in the carousel
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const activeCard = cards[activeIndex];

  return (
    <div className="max-w-lg mx-auto p-8 border-1 border-white bg-opacity-60 rounded-4xl shadow-lg text-white">
      {/* Image & Title */}
      <div className="relative">
        <img
          src={activeCard.image}
          alt={activeCard.title}
          className="w-full h-1/2 object-cover rounded-2xl"
        />
        <div className="flex mt-6">
          <h2 className="text-4xl flex items-center text-white font-thin mr-6">
            {activeCard.title}
          </h2>
          <ArrowTopRightIcon width={22} height={22} />
        </div>
      </div>
      {/* Description */}
      <div className="mt-3">
        <p className="text-sm text-white">{activeCard.description} </p>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <button
            onClick={handlePrev}
            className="bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-600 mx-2"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-600 mx-2"
          >
            Next
          </button>
        </div>
        <Button intent="secondary">View Project</Button>
      </div>
    </div>
  );
};

export { CardComponent };
