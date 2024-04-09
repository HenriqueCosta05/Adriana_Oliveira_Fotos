import Card from "react-bootstrap/Card";
import Image from "../../../../components/Shared/Image/Image";
import Section from "./index";
import Carousel from "react-bootstrap/Carousel";

export default function Testimonials({ data }) {
  const intro = data && data[0];
  const info = data && data.filter((card, index) => index !== 0);

  return (
    intro &&
    info && (
      <Section id="depoimentos">
        <div className="container pb-20 overflow-y-visible z-10">
          <h2 className="text-4xl font-black text-secondary">{intro.title}</h2>
          <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">
            {intro.description}
          </p>
        </div>
        <div className="container md:flex md:flex-wrap md:justify-center md:items-center xxs:block xxs:mx-auto overflow-y-visible">
          <Carousel className="w-full overflow-y-visible" data-bs-theme="dark">
            {info &&
              info.map((infoObj) => (
                <Carousel.Item interval={3000}>
                  <Card
                    className="lg:w-5/12 mx-auto py-10 m-auto flex justify-center items-center xxs:w-full rounded-3xl"
                    bg="info"
                    color="dark"
                    border="secondary"
                  >
                    <Image
                      className="xl:w-2/12 xxs:w-3/5 md:w-1/5 my-4 rounded-full"
                      alt="Profile"
                      src={infoObj.icon}
                    />
                    <Card.Body style={{ zIndex: 50, overflow: "visible" }}>
                      <Card.Text className="text-warning text-2xl">
                        ★★★★★
                      </Card.Text>
                      <Card.Title className="font-bold text-2xl text-secondary">
                        {infoObj.title}
                      </Card.Title>
                      <Card.Text className="text-secondary">
                        {infoObj.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </Section>
    )
  );
}
