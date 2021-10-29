import {
  useEffect,
} from 'react';

export default function RemoteApiBlogPosts() {

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('https://salferrarello.com/wp-json/wp/v2/posts/');
      const newBlogPosts = await result.json();
      console.log(newBlogPosts);
    }

    fetchData();
  }, []);

  return (
    <h2>RemoteApiBlogPosts stub</h2>
  );
}
