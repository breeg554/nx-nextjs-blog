import { ThemeSwitch } from '../modules/Theme';
import { PostApi } from '../modules/Api';
import { useEffect } from 'react';
import { Typography } from '@blog/ui';

export function Index() {
  const httpClient = new PostApi();

  useEffect(() => {
    console.log(httpClient.getPosts());
  }, []);
  return (
    <div>
      <Typography className="text-red-500 dark:text-blue-500">Hi! work in progress...</Typography>
      <ThemeSwitch />
    </div>
  );
}

export default Index;
