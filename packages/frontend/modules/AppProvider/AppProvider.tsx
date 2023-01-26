import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'next-themes';

interface AppProviderProps {
  children: React.ReactNode;
  queryClient?: QueryClient;
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }),
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
