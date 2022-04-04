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
} from "reactstrap";
import img1 from "assets/images/logo.jpg";
import img2 from "assets/images/logo.jpg";
import img3 from "assets/images/logo.jpg";
import img4 from "assets/images/logo.jpg";

const ApprovedProjects = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Approved Projects</CardTitle>
              <CardSubtitle>Showing all approved projects</CardSubtitle>
            </div>
            <div className="ml-auto d-flex no-block align-items-center">
              <div className="dl">
                <Input type="select" className="custom-select">
                  <option value="0">Monthly</option>
                  <option value="1">Daily</option>
                  <option value="2">Weekly</option>
                  <option value="3">Yearly</option>
                </Input>
              </div>
            </div>
          </div>
          <Table className="no-wrap v-middle" responsive>
            <thead>
              <tr className="border-0">
                <th className="border-0">Title</th>
                <th className="border-0">Location</th>

                <th className="border-0">Status</th>
                <th className="border-0">Bid Date</th>
                <th className="border-0">Bid (Naira)</th>
                <th className="border-0">View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img1}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">
                        Construction of classrooms
                      </h5>
                      <span>Closed</span>
                    </div>
                  </div>
                </td>
                <td>Kano State</td>

                <td>
                  <i className="fa fa-circle text-success" id="tlp1"></i>
                </td>
                <td>1st Jun, 2022</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  96,000,000
                </td>
                <td>
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#52c72e", color: "white" }}
                    size="lg"
                    active
                  >
                    View
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img2}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">
                        Renovation of 4 blocks of class rooms
                      </h5>
                      <span>Closed</span>
                    </div>
                  </div>
                </td>
                <td>Borno State</td>

                <td>
                  <i className="fa fa-circle text-success" id="tlp2"></i>
                </td>
                <td>20th Jan, 2022</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  30,000,000
                </td>
                <td>
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#52c72e", color: "white" }}
                    size="lg"
                    active
                  >
                    View
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img3}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">
                        Construction of 2 classrooms and one staff room
                      </h5>
                      <span>Closed</span>
                    </div>
                  </div>
                </td>
                <td>Enugu State</td>

                <td>
                  <i className="fa fa-circle text-success" id="tlp3"></i>
                </td>
                <td>4th Feb, 2022</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  60,000,000
                </td>
                <td>
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#52c72e", color: "white" }}
                    size="lg"
                    active
                  >
                    View
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="mr-2">
                      <img
                        src={img4}
                        alt="user"
                        className="rounded-circle"
                        width="45"
                      />
                    </div>
                    <div className="">
                      <h5 className="mb-0 font-16 font-medium">
                        Renovation of 6 class rooms{" "}
                      </h5>
                      <span>Closed</span>
                    </div>
                  </div>
                </td>
                <td>Lagos State</td>

                <td>
                  <i className="fa fa-circle text-success" id="tlp4"></i>
                </td>
                <td>15th Mar, 2022</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  30,000,000
                </td>
                <td>
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#52c72e", color: "white" }}
                    size="lg"
                    active
                  >
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ApprovedProjects;
