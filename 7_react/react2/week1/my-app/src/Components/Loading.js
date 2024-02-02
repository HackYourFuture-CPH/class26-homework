import React from 'react';
import { useAppContext } from './Context/SearchContext';

function Loading() {
  const { loading } = useAppContext();

  return <>{loading && <p>Loading...</p>}</>;
}

export default Loading;
