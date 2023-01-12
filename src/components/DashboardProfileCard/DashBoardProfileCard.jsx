import { Card, ProgressBar } from "react-bootstrap";

const DashboardProfileCard = (props) => {
  
  return (
    <Card>
      <Card.Img variant="top" src="../../assets/placeholder.jpg" />
      <Card.Body>
        <Card.Title>{console.log(props.currentCampaign)}</Card.Title>
        <ProgressBar animated now={60} />
      </Card.Body>
    </Card>
  );
};

export default DashboardProfileCard;
