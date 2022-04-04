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
  Table,
  Image,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import img1 from "assets/images/logo.jpg";
import img2 from "assets/images/logo.jpg";
import img3 from "assets/images/walllpaper.jpg";
import img4 from "assets/images/logo.jpg";
import { toast } from "react-toastify";

function handleSubmit(e) {
  e.preventDefault();
  loginFunc();
}

function loginFunc() {
  localStorage.setItem("ubec", "Welcome");
  toast.success("Login Successful");
  window.location = "/";
}

const Login = () => {
  return (
    <div>
      <Card
        style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }}
      >
        <CardBody>
          <Row className="mt-3">
            <Col
              sm="12"
              md={{
                offset: 3,
                size: 6,
              }}
            >
              <div
                className="p-4  border "
                style={{ backgroundColor: "white" }}
              >
                <div className="center-image">
                  <img src={img1} />
                </div>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Enter Email</Label>
                    <Input
                      type="text"
                      placeholder="Enter name of project"
                      style={{ width: "100%", marginBottom: "10px" }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Enter Password</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter Description"
                      style={{ width: "100%", marginBottom: "10px" }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Button
                      className="btn"
                      style={{ backgroundColor: "#52c72e", color: "white" }}
                      size="lg"
                      active
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
