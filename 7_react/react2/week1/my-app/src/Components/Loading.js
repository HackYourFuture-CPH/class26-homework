import React from 'react';
import { useAppContext } from '../Context/useAppContext';

function Loading() {
  const { loading } = useAppContext();

  return <>{loading && <p>Loading...</p>}</>;
}

export default Loading;
