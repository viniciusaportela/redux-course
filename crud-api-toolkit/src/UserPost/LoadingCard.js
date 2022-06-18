import React from "react";
import { Card, Skeleton } from "antd";

const LoadingCard = ({ count }) => {
  const renderCards = () => {
    let totalCards = [];

    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Card className="col-md-12" key={i}>
          <Skeleton active></Skeleton>
        </Card>
      );
    }
    return totalCards;
  };
  return <div className="row pb-5">{renderCards()}</div>;
};

export default LoadingCard;
