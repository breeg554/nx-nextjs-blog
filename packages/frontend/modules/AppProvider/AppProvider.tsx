import React from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ThemeProvider } from 'next-themes';

interface AppProviderProps {
  children: React.ReactNode;
  queryClient?: QueryClient;
  dehydratedState?: unknown;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }),
  dehydratedState,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};
