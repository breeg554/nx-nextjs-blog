import { ThemeSwitch } from '../modules/Theme';
import { PostApi } from '../modules/Api';
import { useEffect } from 'react';

export function Index() {
  const httpClient = new PostApi();

  useEffect(() => {
    console.log(httpClient.getPosts());
  }, []);
  return (
    <div>
      <h1 className="text-red-500 dark:text-blue-500">Hi! work in progress...</h1>
      <ThemeSwitch />
    </div>
  );
}

export default Index;
