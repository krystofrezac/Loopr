import { ApolloError } from '@apollo/client';

import errors from './errors';

const recognizeError = (error: ApolloError | undefined): string | undefined => {
  if (!error) return undefined;
  const { networkError } = error;
  if (networkError) {
    switch (networkError.message) {
      case errors.network.failedToFetch:
        return errors.network.failedToFetch;
      default:
        return undefined;
    }
  }

  return undefined;
};

export default recognizeError;