import React from 'react';
import { logger } from '../services/logger.service';

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const env = window['__env'];
  logger.error(error);
  if (!env?.production) {
    return (
      <div className="text-center p-2" role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button className="border p-2" onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    );
  } else {
    return <div className="text-red-400 p-2">!</div>;
  }
};
