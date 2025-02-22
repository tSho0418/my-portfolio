import React from "react";

type SectionHeadingProps = {
  title: string;
};

const Heading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="p-10">
      <h2 className="text-5xl  text-center font-serif text-black mb-4 border-b-1 border-white underline decoration-solid p-6">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
