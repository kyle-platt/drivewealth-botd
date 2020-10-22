import React, { useState } from "react";
import SortBar from "./SortBar";
import { SORT } from "../../constants/main";

export default {
  title: "SortBar",
  component: SortBar,
};

export const Default = () => {
  const [selectedSort, setSelectedSort] = useState(SORT.CREATED);
  return (
    <SortBar
      sortOptions={[
        SORT.CREATED,
        SORT.NAME,
        SORT.MOST_POPULAR,
        SORT.LEAST_POPULAR,
        SORT.APPROVED,
      ]}
      selectedSort={selectedSort}
      handleClick={(option) => setSelectedSort(option)}
    />
  );
};
