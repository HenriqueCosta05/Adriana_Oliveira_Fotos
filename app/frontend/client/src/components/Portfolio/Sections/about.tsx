import Section from "./index";
import Button from "react-bootstrap/Button";

interface AboutProps {
    img: string;
    title: string;
    description: string;
    btnText: string;
    btnLink: string;
    imgGallery: string[];
}
export default function About({img, title, description, btnLink, btnText, imgGallery}: AboutProps) {
  return (
    <Section id="sobre-mim" bgColor="bg-accent">
      <div className="intro flex items-center justify-center flex-wrap">
        <div className="intro__img flex w-full justify-center items-center mb-12">
            <img src={img} alt="Logo" className="rounded-full" />
        </div>
        <div className="intro__title block mx-auto">
                  <h2 className="text-4xl font-black text-secondary">{title}</h2>
                  <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">{description}</p>
                  <Button variant="secondary" href={btnLink} className="my-4 md:p-4 lg:mx-auto">{btnText}</Button>
        </div>
              
              <div className="img__gallery flex flex-wrap justify-center items-center ">
                  {imgGallery && imgGallery.map((img, index) => (
                      <img key={index} src={img} alt="gallery" className="rounded-lg lg:w-2/5 xl:w-3/12 md:w-5/12 h-auto m-4 xxs:w-9/12" />
                  ))
                  }
              </div>
      </div>
    </Section>
  );
}