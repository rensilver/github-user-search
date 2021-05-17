import { makeRequest } from "core/utils/request";
import React, { useEffect, useState } from "react";
import ButtonIconSearch from "./components/ButtonIconSearch";
import SetLoaders from "./components/Loaders/SetLoaders";
import Form from "./Form";
import "./styles.css";
import UserCard from "./UserCard";

const Search = () => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: '/search'})
    .finally(() => setIsLoading(false));
  }, []);

  return (
  <>
    <div className="search-container">
      <div className="search-title">Encontre um perfil Github</div>
      <Form />
      <ButtonIconSearch />
    </div>
    {isLoading ? <SetLoaders /> : (
      <UserCard />
    )}
  </>
)};

export default Search;
