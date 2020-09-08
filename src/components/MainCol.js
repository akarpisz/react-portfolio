import React from "react";
import {Col, Card, CardHeader,CardBody, CardText} from "reactstrap";
import BudgetTracker from "./img/BudgetTracker.jpg";
const MainCol = () => {
  return (
  <Col md={8} xs={12}>
    <Card>
      <CardHeader>
        Budget Tracker
      </CardHeader>
      <CardBody>
        <img src={BudgetTracker} id="budgettracker" alt="budget tracker app"/>
      </CardBody>
      <CardText>
        <span>Summary: </span>
        
      </CardText>
    </Card>
  </Col>
  )
};
export default MainCol;
