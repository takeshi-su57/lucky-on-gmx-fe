"use client";

import { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  arbitrum,
  base,
  apeChain,
  arbitrumSepolia,
} from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import {
  split,
  HttpLink,
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

import "@rainbow-me/rainbowkit/styles.css";
// import { useSubscribeTask } from "@/app-hooks/useTask";
// import { useSubscribeMission } from "@/app-hooks/useMission";

import {
  SuccessSnackbar,
  DefaultSnackbar,
  ErrorSnackbar,
  WarningSnackbar,
  InfoSnackbar,
} from "@/components/snackbars";
// import { useSubscribeBot } from "@/app-hooks/useAutomation";
// import { LOCAL_USER_JWT_KEY } from "@/app-hooks/useUserJWT";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_LUCKY_PLAN_GRAPHQL_API}`,
  headers: {
    "Apollo-Require-Preflight": "true",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.NEXT_PUBLIC_LUCKY_PLAN_GRAPHQL_WSS,
    retryAttempts: Infinity,
    onNonLazyError: (error) => {
      console.error("WebSocket connection failed:", error);
    },
    shouldRetry: () => true,
    // connectionParams: () => {
    // const userJWTStr = localStorage.getItem(LOCAL_USER_JWT_KEY);
    // return {
    //   authToken: userJWTStr ? `${JSON.parse(userJWTStr)}` : "",
    // };
    // },
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const userJWTStr = localStorage.getItem(LOCAL_USER_JWT_KEY);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: userJWTStr ? `Bearer ${JSON.parse(userJWTStr)}` : "",
    },
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {},
    },
  },
});

export const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(splitLink),
});

export const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "LuckyPlan",
  projectId: "aa850d82c6ce67f82647ab0498e00c8a",
  chains: [mainnet, polygon, arbitrum, base, apeChain, arbitrumSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#10b981",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "rounded",
            overlayBlur: "none",
          })}
        >
          <ApolloProvider client={apolloClient}>
            <HeroUIProvider>
              <SnackbarProvider
                Components={{
                  success: SuccessSnackbar,
                  warning: WarningSnackbar,
                  info: InfoSnackbar,
                  error: ErrorSnackbar,
                  default: DefaultSnackbar,
                }}
                autoHideDuration={5000}
                maxSnack={15}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <SubscriptionWrapper>{children}</SubscriptionWrapper>
              </SnackbarProvider>
            </HeroUIProvider>
          </ApolloProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export function SubscriptionWrapper({ children }: { children: ReactNode }) {
  // useSubscribeTask();
  // useSubscribeMission();
  // useSubscribeBot();

  return children;
}
