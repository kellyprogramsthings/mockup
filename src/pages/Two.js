import { useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";

const showInfo = {
  name: "Criminal Minds",
  gifUrl: "https://i.ibb.co/4W27j0v/criminal-minds.gif",
  jpgUrl: "https://i.ibb.co/fCFw14n/criminal-minds.jpg"
}

const Two = () => {
  // const showName = "Criminal Minds";
  // const imageName = showName.toLowerCase().replaceAll(' ', '-').replaceAll('.', '');
  const [imgUrl, setImgUrl] = useState(showInfo.jpgUrl);

  const onImageClick = () => {
    setImgUrl(showInfo.gifUrl);
  }

  return(
    <Container>
      <Row>
        <Col xs="7">
          <Row>
            <Col>
              <Card style={{textAlign: "center", display: "block"}}>
                <img 
                  onClick={onImageClick}
                  alt={showInfo.name} 
                  // src={`${imageName}.gif`}
                  src={imgUrl}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <h2 className="header">Images</h2>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs="5">
          <Card>
            <h2 className="header">Actors</h2>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Two;