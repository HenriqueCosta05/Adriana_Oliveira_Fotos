import Section from "./index";
import Card from 'react-bootstrap/Card';

interface ServicesProps {
    introTitle: string;
    introDescription: string;
    info: object[];
}
export default function Services({info, introTitle, introDescription}: ServicesProps) {
  return (
      <Section id="servicos" bgColor="bg-accent">
          <div className="container">
                <h2 className="text-4xl font-black text-secondary">{introTitle}</h2>
                <p className="text-lg mx-auto text-center font-medium lg:w-1/2 w-11/12 my-4">{introDescription}</p>
          </div>
          <div className="container md:flex md:flex-wrap md:justify-center md:items-center xxs:block xxs:mx-auto">
            {info && info.map((infoObj) =>
              <Card bg="light" border="primary" className="md:w-5/12 xxs:w-11/12 lg:w-3/12 m-4 rounded-2xl">
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
  );
}