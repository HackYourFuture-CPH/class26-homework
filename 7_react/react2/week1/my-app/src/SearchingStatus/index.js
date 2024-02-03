import { AppContext } from "../AppContext";
import { useContext } from "react";

const SearchingStatus = () => {
  const { loading, error } = useContext(AppContext);

  console.log("loading", loading);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchingStatus;
