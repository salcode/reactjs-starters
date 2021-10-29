import {
  useEffect,
} from 'react';

export default function RemoteApiBlogPosts() {

  useEffect(() => {
    async function fetchData() {
      console.log('will async fetch data on component mount');
    }

    fetchData();
  }, []);

  return (
    <h2>RemoteApiBlogPosts stub</h2>
  );
}
