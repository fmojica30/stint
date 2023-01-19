import { Card, ProgressBar } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getCurrentCampaign } from "../../Query/DashboardQueries";

const DashboardProfileCard = (props) => {
  const {
    status,
    error,
    data: currentCampaign,
  } = useQuery({
    querykey: ["currentCampaign"],
    queryFn: getCurrentCampaign,
  });

  return (
    <Card>
      <Card.Img variant="top" src="../../assets/placeholder.jpg" />
      <Card.Body>
        <Card.Title>
          {status === "loading" ? "loading" : currentCampaign.name}
          {/* {console.log(currentCampaign)} */}
        </Card.Title>
        <ProgressBar animated now={60} />
      </Card.Body>
    </Card>
  );
};

export default DashboardProfileCard;
