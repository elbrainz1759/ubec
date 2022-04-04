import React from "react";
import {
  Container,
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
  CardSubtitle,
  Input,
} from "reactstrap";
import { toast } from "react-toastify";
import img1 from "../../assets/images/big/ubec1.jpg";
import img2 from "../../assets/images/big/ubec2.jpeg";
import img3 from "../../assets/images/big/ubec3.png";

const submitBid = () => {
  toast.success("Bid Submitted Successfully");
};

const ViewBid = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <i className="mdi mdi-apps mr-2"> </i>
          Construction of 3 blocks of classrooms with a staff room
        </CardTitle>
        <CardBody className="">
          <Container>
            <Row className="">
              <Col>
                <div>
                  <Button color="primary" outline>
                    Hours left <Badge color="secondary">7</Badge>
                  </Button>
                  <Button color="success" className="ml-3" outline>
                    Bids received <Badge color="secondary">43</Badge>
                  </Button>
                  <Button color="info" className="ml-3" outline>
                    Starting Bid{" "}
                    <Badge color="secondary">30,000,000 naira</Badge>
                  </Button>
                  <Button active color="danger" className="ml-3" outline>
                    Highest Bid{" "}
                    <Badge color="secondary">55,000,000 naira</Badge>
                  </Button>
                  <Button color="warning" className="ml-3" outline>
                    Notifications <Badge color="secondary">5</Badge>
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6">
                <div className="bg-light p-2 border">
                  <CardImg top width="100%" src={img1} />
                </div>
              </Col>
              <Col xs="6">
                <div className="bg-light p-2 border">
                  <p>Location: Kano State</p>
                  <p>
                    Description: Construction of 3 blocks of class rooms for the
                    students of James secondary school Kano State. The project
                    is to start on the 1st of April and should run for 3 months.
                    All interested companies should submit a bid. If selected
                    you will be required to submit a fresh quotation detailing
                    all relevant information and work plan{" "}
                  </p>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Starting Bid: 30,000,000 naira
                  </p>
                  <Row className="mt-3">
                    <Col xs="6">
                      <div className="bg-light p-2 border">
                        <Input type="text" placeholder="Enter Bid" />
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="bg-light p-2 border">
                        <Button
                          className="btn"
                          color="success"
                          size="lg"
                          onClick={submitBid}
                          active
                        >
                          Submit Bid
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs="6" sm="4">
                <div className="bg-light p-2 border">
                  <CardImg top width="100%" src={img1} />
                </div>
              </Col>
              <Col xs="6" sm="4">
                <div className="bg-light p-2 border">
                  <CardImg top width="100%" src={img2} />
                </div>
              </Col>
              <Col sm="4">
                <div className="bg-light p-2 border">
                  <CardImg top width="100%" src={img3} />
                </div>
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default ViewBid;
