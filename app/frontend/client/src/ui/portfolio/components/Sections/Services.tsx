import {useMemo} from 'react'
import Section from "./index";
import Image from "../../../../components/Shared/Image/Image";
import Card from 'react-bootstrap/Card';

export default function Services({ data }) {
  const intro = useMemo(() => data && data[0] , [data]);
  const cardsInfo = useMemo(() => data && data.filter((card, index) => index !== 0), [data]);

  return (
    intro &&
    cardsInfo && (
      <>
        <Section id="servicos" bg="bg-accent">
          <div>
            <div className="container">
              <h2 className="text-4xl font-black text-secondary">
                {intro.title}
              </h2>
              <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">
                {intro.description}
              </p>
            </div>
            <div className="container md:flex md:flex-wrap md:justify-center md:items-center xxs:block xxs:mx-auto">
              {cardsInfo &&
                cardsInfo.map((infoObj, index) => (
                  <Card
                    bg="light"
                    border="primary"
                    className="md:w-5/12 xxs:w-11/12 lg:w-3/12 m-4 rounded-2xl"
                    key={infoObj.title}
                  >
                    <Image
                      alt="serviços"
                      className="w-2/12 mx-auto my-2"
                      src={infoObj.icon}
                      width='auto'
                      height='auto'
                    />
                    <Card.Body>
                      <Card.Title className="font-bold text-2xl">
                        {infoObj.title}
                      </Card.Title>
                      <Card.Text>{infoObj.description}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </div>
          </div>
        </Section>
      </>
    )
  );
}