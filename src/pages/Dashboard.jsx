import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import DashboardProfileCard from "../components/DashboardProfileCard/DashBoardProfileCard";
import { getCurrentCampaign } from "../store/userData-actions";
import { userDataActions } from "../store/userData-slice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const cc = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    dispatch(getCurrentCampaign());
  }, []);

  return (
    <Container className="m-5">
      <Row>
        <Col md={3}>
          <DashboardProfileCard currentCampaign={cc}/>
        </Col>
        <Col md={9}>
          SP2
        </Col>
      </Row>
      <Row>
        <Col>
          <p>SP3</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;