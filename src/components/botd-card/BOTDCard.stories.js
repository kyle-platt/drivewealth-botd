import React from "react";
import BOTDCard from "./BOTDCard";

export default {
  title: "BOTDCard",
  component: BOTDCard,
};

export const Default = () => {
  return (
    <BOTDCard
      votes={35}
      name="'Sweet Chili O' Mine' Burger"
      isApproved={true}
    />
  );
};
