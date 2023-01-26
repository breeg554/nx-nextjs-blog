import { ThemeSwitch } from '../modules/Theme';
import { PostApi } from '../modules/Api';
import { useEffect } from 'react';
import { Typography } from '@blog/ui';
import { Post } from '../modules/Post';

export function Index() {
  const fetchPosts = async () => {
    const postApi = new PostApi();
    const data = await postApi.getPosts();

    const formatted = data.items.map(post => Post.fromResponsePostDTO(post));
    console.log(formatted);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <Typography className="text-red-500 dark:text-blue-500">Hi! work in progress...</Typography>
      <ThemeSwitch />
    </div>
  );
}

export default Index;
