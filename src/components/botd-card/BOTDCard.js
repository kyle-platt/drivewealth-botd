import React from "react";
import { updateApproved, updateVotes } from "../../services/burgers";
import upArrow from "../../assets/up-arrow.svg";
import downArrow from "../../assets/down-arrow.svg";
import "./BOTDCard.css";

const BOTDCard = ({ votes, name, isApproved, burger, updateResults }) => {
  const handleDoubleClick = () => {
    updateApproved(burger).then(() => updateResults());
  };
  const handleUpVote = () => {
    updateVotes(burger).then(() => updateResults());
  };
  const handleDownVote = () => {
    updateVotes(burger, true).then(() => updateResults());
  };

  return (
    <div
      className={`botd-card${isApproved ? " approved" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      <span className="botd-card__votes">{votes}</span>
      <span className="botd-card__name">{name}</span>
      <div className="botd-card__arrows">
        <img
          src={upArrow}
          onClick={handleUpVote}
          alt="Upvote arrow"
          width="20"
          height="20"
        />
        <img
          src={downArrow}
          onClick={handleDownVote}
          alt="Downvote arrow"
          width="20"
          height="20"
        />
      </div>
    </div>
  );
};

export default BOTDCard;
