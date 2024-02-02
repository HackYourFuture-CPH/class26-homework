// GithubContext.js
import React, { createContext, useReducer, useContext } from "react";

const GithubContext = createContext();

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const githubReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_LOADING":
      return { ...state, loading: true, error: null };
    case "SEARCH_SUCCESS":
      return { ...state, users: action.payload, loading: false, error: null };
    case "SEARCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (query) => {
    try {
      dispatch({ type: "SEARCH_LOADING" });
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();

      if (data.items) {
        dispatch({ type: "SEARCH_SUCCESS", payload: data.items });
      } else {
        dispatch({ type: "SEARCH_ERROR", payload: "No results..." });
      }
    } catch (error) {
      dispatch({
        type: "SEARCH_ERROR",
        payload: `Error fetching: ${error.message}`,
      });
    }
  };

  return (
    <GithubContext.Provider value={{ ...state, searchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

const useGithubContext = () => {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error("useGithubContext must be used within a GithubProvider");
  }
  return context;
};

export { GithubProvider, useGithubContext };
