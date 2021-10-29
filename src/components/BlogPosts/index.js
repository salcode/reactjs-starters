export default function BlogPosts({ posts }) {
  return (
    <ul className="blog-posts">
      {
        posts.map((post) => (
          <li
            key={post.id}
          >
            {post.title.rendered}
          </li>
        ))
      }
    </ul>
  );
}
