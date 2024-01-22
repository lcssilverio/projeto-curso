import { PostCard } from "../PostCard"

export const Posts = ({ posts }) => {
  return (
    <div className="App">
      <div className="posts">
        {posts.map((post) => (
          <PostCard
            id={post.id}
            body={post.body}
            cover={post.cover}
            title={post.title}
          />
        ))}
      </div>
    </div>
  )
}
