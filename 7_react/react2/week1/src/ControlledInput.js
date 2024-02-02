import React from 'react';
import { useGitHubUserSearchContext } from './App';

const ControlledInput = () => {
  const { handleInputChange } = useGitHubUserSearchContext();

  return (
    <input
      type="text"
      placeholder="Search GitHub users..."
      onChange={handleInputChange}
    />
  );
};

export default ControlledInput;