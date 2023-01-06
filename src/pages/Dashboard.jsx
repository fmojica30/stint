import { Container, Row, Col } from "react-bootstrap"


const Dashboard = () => {

  return (
    <Container>
      <Row>
        <Col md={3}>
          SP1
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