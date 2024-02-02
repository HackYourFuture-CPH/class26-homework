// List.js
import React from 'react';
import { useAppContext } from './useAppContext';

function List() {
  const { data } = useAppContext();

  return (
    <div>
      {data.length > 0 ? (
        data.map((user) => <div key={user.id}>{user.login}</div>)
      ) : (
        <p>No results...</p>
      )}
    </div>
  );
}

export default List;
