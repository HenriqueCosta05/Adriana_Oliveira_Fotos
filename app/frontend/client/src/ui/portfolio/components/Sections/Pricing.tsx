import React, { useMemo } from "react";
import Section from "./index";

export default function Pricing({ data }) {
  const intro = useMemo(() => data && data[0], [data]);
  const pricesData = useMemo(
    () => data && data.filter((price, index) => index !== 0),
    [data]
  );

  if (!intro || !pricesData) {
    return null;
  }

  return (
    <Section id="precos" bg="bg-accent">
      <div className="container">
        <div className="intro">
          <h2 className="italic mb-10 text-center font-extrabold text-4xl text-secondary">
            {intro.title}
          </h2>
          <p className="italic text-center mb-11">{intro.description}</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {pricesData.map((price, index) => (
            <div
              key={index}
              className="bg-neutral card w-1/6 py-20 mx-3 md:w-5/12 xxs:w-11/12 lg:w-2/12 m-2 p-4 rounded-3xl"
            >
              <p className="font-black mb-3">{price.title}</p>
              <p className="italic">{price.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
