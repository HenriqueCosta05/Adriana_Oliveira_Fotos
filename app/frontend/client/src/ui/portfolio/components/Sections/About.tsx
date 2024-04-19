import { useMemo } from "react";
import Image from "../../../../components/Shared/Image/Image";
import Section from "./index";
import Button from "react-bootstrap/Button";

export default function About({ data }) {
  const logo = useMemo(() => data && data[0], [data]);
  const title = useMemo(() => data && data[1], [data]);
  const description = useMemo(() => data && data[2], [data]);
  const button = useMemo(() => data && data[3], [data]);
  const imgGallery = useMemo(() => data && data[4] && data[4].src, [data]);

  return (
    <Section id="sobre-mim">
      {logo && title && description && button && imgGallery && (
        <div className="intro flex items-center justify-center flex-wrap">
          <div className="intro__img flex w-full justify-center items-center mb-12">
            <Image
              src={logo.src}
              alt="Logo"
              width={logo.width}
              height={logo.height}
              className="rounded-full lg:w-1/6 w-5/12"
            />
          </div>
          <div className="intro__title block mx-auto">
            <h2 className="text-4xl font-black text-secondary">
              {title.payload}
            </h2>
            <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">
              {description.payload}
            </p>
            <Button
              variant="secondary"
              href={button.href}
              className="my-4 md:p-4 lg:mx-auto"
            >
              {button.payload}
            </Button>
          </div>

          <div className="img__gallery flex flex-wrap justify-center items-center ">
            {Array.isArray(imgGallery) &&
              imgGallery &&
              imgGallery.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width=""
                  height=""
                  alt="gallery"
                  className="rounded-lg lg:w-2/5 xl:w-3/12 md:w-5/12 h-auto m-4 xxs:w-9/12"
                />
              ))}
          </div>
        </div>
      )}
    </Section>
  );
}
