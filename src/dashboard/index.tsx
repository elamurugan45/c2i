import { Card, Col, Row } from "antd";
import "./style.css";

export const Dashboard = () => {
  return (
    <>
      <Row gutter={24} className="row-content">
        Welcome to Connect2Investors!
      </Row>
      <Row>
        <Col span={8}>
          <Card className="cardbox">
            <Row className="text-font">No.Of.Investor</Row>
            <Row className="num-size">20</Row>
            <Row>
              <Col className="text-color">Year of 2023</Col>
            </Row>
            <Col>
              <img src="../assests/savings.png" className="image-size"></img>
            </Col>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="cardbox">
            <Row className="text-font">No.Of.Investor</Row>
            <Row className="num-size">20</Row>
            <Row>
              <Col className="text-color">Year of 2023</Col>
            </Row>
            <Col>
              <img src="../assests/partner_exchange.png" className="image-size"></img>
            </Col>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="cardbox">
            <Row className="text-font">No.Of.Investor</Row>
            <Row className="num-size">20</Row>
            <Row>
              <Col className="text-color">Year of 2023</Col>
            </Row>
            <Col>
              <img src="../assests/rocket_launch.png" className="image-size"></img>
            </Col>
          </Card>
        </Col>
      </Row>

    </>
  );
};
