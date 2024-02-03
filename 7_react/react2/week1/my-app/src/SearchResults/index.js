import { AppContext } from "../AppContext";
import { useContext } from "react";
import "./index.css";

const SearchResults = () => {
  const { items } = useContext(AppContext);

  const searchResults = items.map((item) => <li>{item.login}</li>);

  return (
    <div>
      <ul>{searchResults}</ul>
    </div>
  );
};

export default SearchResults;
