import axios from "axios";

export const getBurgers = ({ sortBy, orderBy }) => {
  const url = new URL("http://localhost:3001/burgers");

  if (sortBy) {
    url.searchParams.append("_sort", sortBy);
  }
  if (orderBy) {
    url.searchParams.append("_order", orderBy);
  }

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const addBurger = (name) => {
  const url = new URL("http://localhost:3001/burgers");

  const body = {
    name,
    votes: 0,
    approved: false,
    created: Date.now(),
    updated: Date.now(),
  };

  return axios
    .post(url, body)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const updateApproved = (burger) => {
  const url = new URL(`http://localhost:3001/burgers/${burger.id}`);

  const body = {
    ...burger,
    approved: !burger.approved,
    updated: Date.now(),
  };

  return axios
    .put(url, body)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const updateVotes = (burger, isDownVote) => {
  const url = new URL(`http://localhost:3001/burgers/${burger.id}`);

  const body = {
    ...burger,
    votes: isDownVote ? burger.votes - 1 : burger.votes + 1,
    updated: Date.now(),
  };

  return axios
    .put(url, body)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
