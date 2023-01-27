import { dehydrate, QueryClient } from 'react-query';

export const prepareState = async (cb: (queryClient: QueryClient) => Promise<void>) => {
  const queryClient = new QueryClient();

  await cb(queryClient);

  return dehydrate(queryClient);
};
