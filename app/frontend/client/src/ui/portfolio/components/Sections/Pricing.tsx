import { useMemo } from "react";
import Section from "./index";

export default function Pricing({ data }) {
  const intro = useMemo(() => data && data[0], [data]);
  const pricesData = useMemo(() => data && data.filter((price, index) => index !== 0), [data]);

  if (!intro || !pricesData) {
    return null;
  }

  return (
    <Section id="precos" bg="bg-accent">
      <div className="container">
        <div className="intro">
          <h2 className="text-center font-extrabold text-4xl text-secondary">{intro.title}</h2>
          <p className="text-center mb-10">{intro.description}</p>
        </div>
        <div className="flex flex-wrap xl:justify-around w-full">
          {pricesData.map((price) => (
            <div key={price.title} className="flex items-center justify-between lg:m-8 xxs:m-4 border-b-2 xl:w-1/3 w-full border-black border-dotted">
              <p>{price.title}</p>
              <p>{price.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}