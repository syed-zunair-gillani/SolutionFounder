import Stories from './coponents/Stories';

export default function HomeStories({ posts }) {
  console.warn('Posts', posts);
  return (
    <>
      <div className="grid">
        {posts &&
          posts.map((post) => <Stories key={post.uri} post={post}></Stories>)}
      </div>
    </>
  );
}
