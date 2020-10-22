import React, { useState, useEffect } from "react";
import { SORT } from "../../constants/main";
import { getBurgers } from "../../services/burgers";
import SortBar from "../sort-bar/SortBar";
import BOTDCard from "../botd-card/BOTDCard";
import NewBurgerForm from "../new-burger-form/NewBurgerForm";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search";
import "./App.css";

const App = () => {
  const numberPerPage = 4;
  const [burgers, setBurgers] = useState([]);
  const [selectedSort, setSelectedSort] = useState(SORT.CREATED);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const getList = () => {
    let args = {};
    switch (selectedSort) {
      case SORT.CREATED:
        args = { sortBy: "created", orderBy: "desc" };
        break;
      case SORT.NAME:
        args = { sortBy: "name" };
        break;
      case SORT.MOST_POPULAR:
        args = { sortBy: "votes", orderBy: "desc" };
        break;
      case SORT.LEAST_POPULAR:
        args = { sortBy: "votes" };
        break;
      case SORT.APPROVED:
        args = { sortBy: "approved", orderBy: "desc" };
        break;
      default:
        return {};
    }

    getBurgers(args).then((response) => setBurgers(response));
  };

  const handlePageChange = (event) => setCurrentPage(event.target.value);

  const handleSearchChange = (event) => setSearchValue(event.target.value);

  useEffect(() => {
    getBurgers({ sortBy: "created", orderBy: "desc" }).then((response) =>
      setBurgers(response)
    );
  }, []);

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSort]);

  useEffect(() => {
    setTotalPages(Math.ceil(modifiedBurgerList().length / numberPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burgers, searchValue]);

  const modifiedBurgerList = () => {
    if (searchValue) {
      return burgers.filter((burger) => burger.name.includes(searchValue));
    }
    return burgers;
  };

  return (
    <div className="App">
      <NewBurgerForm updateResults={getList} burgers={burgers} />
      <header>
        <h1 className="list-header">Burger List</h1>
      </header>
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
      <Search handleChange={handleSearchChange} value={searchValue} />
      {modifiedBurgerList()
        .slice((currentPage - 1) * numberPerPage, currentPage * numberPerPage)
        .map((burger) => (
          <BOTDCard
            key={burger.id}
            votes={burger.votes}
            name={burger.name}
            isApproved={burger.approved}
            burger={burger}
            updateResults={getList}
          />
        ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleChange={handlePageChange}
      />
    </div>
  );
};

export default App;
