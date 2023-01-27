import { useQuery } from 'react-query';
import { PostApi } from '../Api';
import { Post } from './Post';

export const usePostHooks = () => {
  const postApi = new PostApi();

  const usePostsQuery = () => {
    const { data, ...rest } = useQuery(postKeys.all, () => postApi.getPosts());

    if (data) {
      const posts = data!.items.map(post => Post.fromResponsePostDTO(post));
      return { data: posts, ...rest };
    }

    return { data, ...rest };
  };

  return { usePostsQuery };
};

export const postKeys = {
  all: ['posts'] as const,
};
