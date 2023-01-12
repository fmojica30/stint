import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardProfileCard from "../components/DashboardProfileCard/DashBoardProfileCard";
import { getCampaigns } from "../Query/DashboardQueries";
import { getCurrentCampaign } from "../Query/DashboardQueries";

import { useQuery } from "@tanstack/react-query";
import { getCampaignData } from "../utils/dashboardAPI";

const Dashboard = () => {
  
  // const {
  //   status,
  //   error,
  //   data: currentCampaign,
  // } = useQuery({
  //   querykey: ["currentCampaign"],
  //   queryFn: getCurrentCampaign
  // });
  
  // const {
  //   status: campaignsStatus,
  //   error: campaignsError,
  //   data: campaigns,
  // } = useQuery({
  //   querykey: ["campaigns"],
  //   queryFn: getCampaigns
  // });

  return (
    <Container className="m-5">
      <Row>
        <Col md={3}>
          <DashboardProfileCard currentCampaign={campaigns} />
        </Col>
        <Col md={9}>SP2</Col>
      </Row>
      <Row>
        <Col>
          <p>SP3</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
