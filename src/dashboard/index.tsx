import { Card, Col, Row } from "antd"
import "./style.css";

export const Dashboard=()=>{
    return(
        <>
      <Row gutter={24} className="row-content">
      Welcome to Connect2Investors!
        </Row>
        <Row>
        <Col>
         <Card className="cardbox">
            <Row className="text-font">No.Of.Investor</Row>
            <Row className="num-size">20</Row>
         </Card>
        </Col>
        </Row>
        </>
        )
}