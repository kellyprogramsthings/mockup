import { useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";

const showInfo = {
  name: "Criminal Minds",
  gifUrl: "https://i.ibb.co/4W27j0v/criminal-minds.gif",
  jpgUrl: "https://i.ibb.co/fCFw14n/criminal-minds.jpg"
}

const One = () => {
  // const showName = "Criminal Minds";
  // const imageName = showName.toLowerCase().replaceAll(' ', '-').replaceAll('.', '');
  const [imgUrl, setImgUrl] = useState(showInfo.jpgUrl);

  const onImageClick = () => {
    setImgUrl(showInfo.gifUrl);
  }

  return(
    <Container>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col style={{textAlign: "center"}}>
              <img 
                  onClick={onImageClick}
                  alt={showInfo.name} 
                  // src={`${imageName}.gif`}
                  src={imgUrl}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Card>
            <h2 className="header">Characters</h2>
          </Card>
        </Col>
        <Col xs="6">
          <Card>
            <h2 className="header">Images</h2>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default One;