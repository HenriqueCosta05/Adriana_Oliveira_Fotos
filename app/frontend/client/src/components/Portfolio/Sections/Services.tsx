import Section from "./index";
import Card from 'react-bootstrap/Card';

export default function Services({ data }) {
  const intro = data && data[0];
  const cardsInfo = data && data.filter((card, index) => index !== 0);

  return (
    intro && cardsInfo && (
      <>
        <Section id="servicos" bg="bg-accent">
          <div className="container">
            <h2 className="text-4xl font-black text-secondary">{intro.title}</h2>
            <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">{intro.description}</p>
          </div>
          <div className="container md:flex md:flex-wrap md:justify-center md:items-center xxs:block xxs:mx-auto">
            {cardsInfo && cardsInfo.map((infoObj) =>
              <Card bg="light" border="primary" className="md:w-5/12 xxs:w-11/12 lg:w-3/12 m-4 rounded-2xl" key={infoObj.title}>
                <Card.Img variant="top" className="w-2/12 mx-auto my-2" src={infoObj.icon} />
                <Card.Body>
                  <Card.Title className="font-bold text-2xl">{infoObj.title}</Card.Title>
                  <Card.Text>
                    {infoObj.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
        </Section>
      </>
    )
  );
}