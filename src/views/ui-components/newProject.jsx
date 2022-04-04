import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Form,
  FormGroup,
  Button,
} from "reactstrap";

const NewProject = () => {
  return (
    <div>
      <Card>
        <CardTitle
          style={{ backgroundColor: "#52c72e", color: "white" }}
          className=" border-bottom p-3 mb-0"
        >
          <i className="mdi mdi-apps mr-2"> </i>
          New Project
        </CardTitle>
        <CardBody className="">
          <Container>
            <Row className="mt-3">
              <Col
                sm="12"
                md={{
                  offset: 1,
                  size: 10,
                }}
              >
                <div className=" p-2 border">
                  <Form>
                    <FormGroup>
                      <Label>Project Name</Label>
                      <Input
                        type="text"
                        placeholder="Enter name of project"
                        style={{ width: "100%", marginBottom: "10px" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Project Description</Label>
                      <Input
                        type="textarea"
                        placeholder="Enter Description"
                        style={{ width: "100%", marginBottom: "10px" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Starting Price</Label>
                      <Input
                        type="number"
                        placeholder="Enter Price"
                        style={{ width: "100%", marginBottom: "10px" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Upload Images / Samples</Label>
                      <Input
                        type="file"
                        placeholder="Image"
                        style={{ width: "100%", marginBottom: "10px" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Start Date</Label>
                      <Input
                        type="date"
                        placeholder="Date"
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
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewProject;
