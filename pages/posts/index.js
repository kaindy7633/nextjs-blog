function Posts({ posts }) {
  return (
    <ul>
      {
        posts.map(post => (
          <li>{post.id} -- {post.title} -- {post.author}</li>
        ))
      }
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:9000/posts')
  const posts = await res.json()

  return {
    props: {posts}
  }
}

export default Posts