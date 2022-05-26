import Stories from './components/Stories';

export default function HomeStories({ posts }) {

  return (
    <>
      <div className="grid">
        {posts &&
          posts.map((post) => <Stories key={post.uri} post={post}></Stories>)}
      </div>
    </>
  );
}
