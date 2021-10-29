export default function BlogPosts({ posts }) {
  return (
    <ul className="blog-posts">
      {
        posts.map((post) => (
          <li>{post.title.rendered}</li>
        ))
      }
    </ul>
  );
}
