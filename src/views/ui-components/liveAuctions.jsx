import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns,
  CardGroup,
  CardDeck,
  CardLink,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Col,
} from "reactstrap";

import img1 from "../../assets/images/big/ubec1.jpg";
import img2 from "../../assets/images/big/ubec2.jpeg";
import img3 from "../../assets/images/big/ubec3.png";
import img4 from "../../assets/images/big/img4.jpg";
import img5 from "../../assets/images/big/img5.jpg";
import img6 from "../../assets/images/big/img6.jpg";
import img7 from "../../assets/images/background/img5.jpg";
import { Link } from "react-router-dom";

const LiveAuctions = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Live Auctions</h5>
      <Row>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img1} />
            <CardBody>
              <CardTitle>Renovation of 3 Blocks of Class rooms</CardTitle>
              <CardSubtitle>Location: Kano State</CardSubtitle>
              <CardSubtitle>Bid Date: 3rd April, 2022</CardSubtitle>
              <CardSubtitle>Status: Pending</CardSubtitle>
              {/* <CardText>
                We are looking for suitable contractors to bid for the current
                ongoing construction of a 3 class rooms in Abia state
              </CardText> */}
              <Button style={{ backgroundColor: "#52c72e", color: "white" }}>
                View Project
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>Construction of 3 Blocks of Class rooms</CardTitle>
              <CardSubtitle>Location: Kano State</CardSubtitle>
              <CardSubtitle>Bid Date: 3rd April, 2022</CardSubtitle>
              <CardSubtitle>Status: Pending</CardSubtitle>
              {/* <CardText>
                We are looking for suitable contractors to bid for the current
                ongoing construction of a 3 class rooms in Abia state
              </CardText> */}
              <Link to="/viewBid/1">
                <Button style={{ backgroundColor: "#52c72e", color: "white" }}>
                  View Project
                </Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img3} />
            <CardBody>
              <CardTitle>Construction of 3 Blocks of Class rooms</CardTitle>
              <CardSubtitle>Location: Kano State</CardSubtitle>
              <CardSubtitle>Bid Date: 3rd April, 2022</CardSubtitle>
              <CardSubtitle>Status: Pending</CardSubtitle>
              {/* <CardText>
                We are looking for suitable contractors to bid for the current
                ongoing construction of a 3 class rooms in Abia state
              </CardText> */}
              <Button style={{ backgroundColor: "#52c72e", color: "white" }}>
                View Project
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img1} />
            <CardBody>
              <CardTitle>Construction of 3 Blocks of Class rooms</CardTitle>
              <CardSubtitle>Location: Kano State</CardSubtitle>
              <CardSubtitle>Bid Date: 3rd April, 2022</CardSubtitle>
              <CardSubtitle>Status: Pending</CardSubtitle>
              {/* <CardText>
                We are looking for suitable contractors to bid for the current
                ongoing construction of a 3 class rooms in Abia state
              </CardText> */}
              <Button style={{ backgroundColor: "#52c72e", color: "white" }}>
                View Project
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img2} />
            <CardBody>
              <CardTitle>Construction of 3 Blocks of Class rooms</CardTitle>
              <CardSubtitle>Location: Kano State</CardSubtitle>
              <CardSubtitle>Bid Date: 3rd April, 2022</CardSubtitle>
              <CardSubtitle>Status: Pending</CardSubtitle>
              {/* <CardText>
                We are looking for suitable contractors to bid for the current
                ongoing construction of a 3 class rooms in Abia state
              </CardText> */}
              <Button style={{ backgroundColor: "#52c72e", color: "white" }}>
                View Project
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardImg top width="100%" src={img3} />
            <CardBody>
              <CardTitle>Construction of 3 Blocks of Class rooms</CardTitle>
              <CardSubtitle>Location: Kano State</CardSubtitle>
              <CardSubtitle>Bid Date: 3rd April, 2022</CardSubtitle>
              <CardSubtitle>Status: Pending</CardSubtitle>
              {/* <CardText>
                We are looking for suitable contractors to bid for the current
                ongoing construction of a 3 class rooms in Abia state
              </CardText> */}
              <Button style={{ backgroundColor: "#52c72e", color: "white" }}>
                View Project
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default LiveAuctions;
