import React, { useContext } from 'react';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { useSnackbar } from 'notistack';
import { getDisplayName } from 'recompose';

import accessContext, {
  INVALID_COOKIE,
  UNAUTHORIZED,
} from 'lib/apollo/accessContext';
import recognizeError from 'lib/apollo/recognizeError';
import { ACCESS_DENIED } from 'lib/apollo/recognizeError/errors';
import { useTranslation } from 'lib/i18n';

const withApollo = <ComponentProps extends {} = any>(
  Component: React.ComponentType<ComponentProps>,
): React.FC<ComponentProps> => props => {
  const access = useContext(accessContext);

  const cache = new InMemoryCache();

  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const errorLink = onError(error => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (error.networkError?.statusCode === 401) access.set(INVALID_COOKIE);
    else if (
      error.graphQLErrors?.some(
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        error => error['loopr-error']?.code === ACCESS_DENIED,
      )
    ) {
      if (
        error.operation.query.definitions.some(
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          definition => definition.operation === 'query',
        )
      ) {
        access.set(UNAUTHORIZED);
      } else if (
        error.operation.query.definitions.some(
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          definition => definition.operation === 'mutation',
        )
      ) {
        enqueueSnackbar(t('errors.unauthorized'), { variant: 'warning' });
      }
    } else {
      const snackbar = recognizeError(error);
      enqueueSnackbar(snackbar.message, { variant: snackbar.variant });
    }
  });

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const token = cookie.get(`${process.env.NEXT_PUBLIC_TOKEN_COOKIE}`);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });

  Component.displayName = `${getDisplayName(Component)}-withApollo`;

  return (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
  );
};

export default withApollo;
