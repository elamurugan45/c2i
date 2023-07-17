import { Button, Card, Col, Input, Row } from "antd";
import "./style.css";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";

export const Investor = () => {
  const a=[1,2,3,4]
  return (
    <>
      <Row gutter={24} className="rowcontent">
        <Col className="text">Startup List</Col>
        <Row gutter={24}>
          <Col>
            <Input
              className="searchbox"
              autoComplete="off"
              placeholder="Search by Title"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              className="create-btn"
              block
            >
              Create
            </Button>
          </Col>
        </Row>
      </Row>
      <Row className="gap-search">
        {a?.map((a) =>(
        <Col lg={12}sm={18} className="col-gap">
          <Card className="card-box">
            <Row>
              <Col className="img-size">
                <img src="../assests/Ellipse 10.png" className="img-view"></img>
              </Col>
              <Col className="col-box">
                <Row className="name-font">1stCollab</Row>
                <Row>1stCollab@gmail.com</Row>
                <Row>+919798718368</Row>
              </Col>
            </Row>
          </Card>
        </Col>
        ))}
      </Row>
    </>
  );
};
