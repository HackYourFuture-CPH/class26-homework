// Loading.js
import React from 'react';
import { useAppContext } from './useAppContext';

function Loading() {
  const { loading } = useAppContext();

  return <>{loading && <p>Loading...</p>}</>;
}

export default Loading;
