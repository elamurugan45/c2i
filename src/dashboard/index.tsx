import { Avatar, Card, Col, Row, Tag } from "antd";
import "./style.css";
import { CalendarOutlined, MoreOutlined } from "@ant-design/icons";

export const Dashboard = () => {
  return (
    <>
      <Row gutter={24} className="row-content">
        Welcome to Connect2Investors!
      </Row>
      <Row className="content-space">
        <Col span={8}>
          <Card className="cardbox">
            <Row className="text-font">No.Of.Investor</Row>
            <Row className="num-size">20</Row>
            <Row>
              <Col className="text-color">Year of 2023</Col>
            </Row>
            <Col>
              <img
                src="../assests/savings.png"
                className="image-size"
                alt="Savings"
              ></img>
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
              <img
                src="../assests/partner_exchange.png"
                className="image-size"
                alt="Partner Exchange"
              ></img>
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
              <img
                src="../assests/rocket_launch.png"
                className="image-size"
                alt="Rocket Launch"
              ></img>
            </Col>
          </Card>
        </Col>
      </Row>
      <Card className="card-space">
        <Row className="content-space">
          <Col className="text-fonts">Calendar Schedule</Col>
          <Col>
            <MoreOutlined />
          </Col>
        </Row>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Meeting Importance</th>
          </tr>
          <tr>
            <td>
              <Row>
                <Col span={5} className="table-col-align">
                  <Avatar src="../assests/Avatar.png" className="avatar-img" />
                </Col>
                <Col span={19} className="table-header-text">
                  <h5>Call with hilda</h5>
                  <p>
                    <CalendarOutlined /> 21 Jul | 08:20-10:30
                  </p>
                </Col>
              </Row>
            </td>
            <td className="table-para">
              <p>
                a list of topics, action items, and activities you want to
                discuss during the meeting
              </p>
            </td>
            <td style={{ textAlign: "center" }}>
              <Tag color="green">High</Tag>
            </td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col span={5} className="table-col-align">
                  <Avatar src="../assests/Avatar1.png" className="avatar-img" />
                </Col>
                <Col span={19} className="table-header-text">
                  <h5>Conference call</h5>
                  <p>
                    <CalendarOutlined /> 21 Jul | 08:20-10:30
                  </p>
                </Col>
              </Row>
            </td>
            <td className="table-para">
              <p>
                a list of topics, action items, and activities you want to
                discuss during the meeting
              </p>
            </td>
            <td style={{ textAlign: "center" }}>
              <Tag color="warning">Avg</Tag>
            </td>
          </tr>
          {/* <tr>
            <td><Row>
                <Col span={5} className="table-col-align">
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
                </Col>
                <Col span={19}>
                    <h5>Meeting with Mark</h5>
                    <p><CalendarOutlined /> 21 Jul | 08:20-10:30</p>
                </Col>
                </Row></td>
            <td className="table-para"><p>a list of topics, action items, and activities you want to discuss during the meeting</p></td>
            <td  style={{textAlign:'center'}}><Tag color="#108EE9">Avg</Tag></td>
          </tr> */}
        </table>
      </Card>
    </>
  );
};
