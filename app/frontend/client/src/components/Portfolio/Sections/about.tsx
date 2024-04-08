import Image from "../../Shared/Image/Image";
import Section from "./index";
import Button from "react-bootstrap/Button";

export default function About({ data }) {

  const logo = data && data[0]	
  const title = data && data[1]
  const description = data && data[2]
  const button = data && data[3]
  const imgGallery = data && data[4] && data[4].src

  return (
    <Section id="sobre-mim">
        {logo && title && description && button && imgGallery && (
        <div className="intro flex items-center justify-center flex-wrap">
        <div className="intro__img flex w-full justify-center items-center mb-12">
            <Image src={logo.src} alt="Logo" className="rounded-full" />
        </div>
        <div className="intro__title block mx-auto">
                  <h2 className="text-4xl font-black text-secondary">{title.payload}</h2>
                  <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">{description.payload}</p>
                  <Button variant="secondary" href={button.href} className="my-4 md:p-4 lg:mx-auto">{button.payload}</Button>
        </div>
              
              <div className="img__gallery flex flex-wrap justify-center items-center ">
                  {Array.isArray(imgGallery) && imgGallery && imgGallery.map((img, index) => (
                       <Image key={index} src={img} alt="gallery" className="rounded-lg lg:w-2/5 xl:w-3/12 md:w-5/12 h-auto m-4 xxs:w-9/12" />
                  ))
                  }
              </div>
      </div>
      )}
    </Section>
  );
}