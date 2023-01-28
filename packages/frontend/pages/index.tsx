import { ThemeSwitch } from '../modules/Theme';
import { Typography } from '@blog/ui';
import { postKeys, usePostHooks } from '../modules/Post';
import { QueryClient } from 'react-query';
import { PostApi } from '../modules/Api';
import { prepareState } from '../utils';
import { RichTextRenderer } from '../modules/Contentful';

export function Index() {
  const { usePostsQuery } = usePostHooks();
  const { data } = usePostsQuery();

  return (
    <div>
      <Typography className="text-red-500 dark:text-blue-500">Hi! work in progress...</Typography>
      <ThemeSwitch />
      {data && <RichTextRenderer document={data[0].content} />}
    </div>
  );
}

export default Index;

export async function getServerSideProps() {
  const dehydratedState = await prepareState(async (queryClient: QueryClient) => {
    const postApi = new PostApi();

    await queryClient.prefetchQuery(postKeys.all, () => postApi.getPosts());
  });

  return {
    props: {
      dehydratedState,
    },
  };
}
