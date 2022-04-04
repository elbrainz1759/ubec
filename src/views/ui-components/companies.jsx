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
import img1 from "assets/images/users/companies.jpg";
import img2 from "assets/images/users/companies.jpg";
import img3 from "assets/images/users/companies.jpg";
import img4 from "assets/images/users/companies.jpg";

const Companies = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>Companies</CardTitle>
              <CardSubtitle>Showing all companies</CardSubtitle>
            </div>
            <div className="ml-auto d-flex no-block align-items-center">
              <div className="dl">
                <Input type="select" className="custom-select">
                  <option value="0">Pending</option>
                  <option value="1">Approved</option>
                  <option value="2">Rejected</option>
                </Input>
              </div>
            </div>
          </div>
          <Table className="no-wrap v-middle" responsive>
            <thead>
              <tr className="border-0">
                <th className="border-0">Name of Company</th>
                <th className="border-0">Location</th>
                <th className="border-0">Address</th>
                <th className="border-0">Status</th>
                <th className="border-0">View Documents</th>
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
                        Amada Nigeria limited
                      </h5>
                    </div>
                  </div>
                </td>
                <td>Kano State</td>
                <td>Plot 122 musa road, Kano State</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  Pending
                </td>
                <td>
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#52c72e", color: "white" }}
                    size="lg"
                    active
                  >
                    View Documents
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
                        Logics Engineering services ltd
                      </h5>
                    </div>
                  </div>
                </td>
                <td>Borno State</td>

                <td>Plot 143, Umaru Dikko crescent, jabi, Abuja</td>
                <td className="blue-grey-text  text-darken-4 font-medium">
                  Approved
                </td>
                <td>
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#52c72e", color: "white" }}
                    size="lg"
                    active
                  >
                    View Documents
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

export default Companies;
