import StoryBox from './story-box';

export default function BlogPost({ posts }) {
  return (
    <>
      {posts.map((data, index) => (
        <div key={index}>
          <StoryBox
            icon="Awarded-as-Best-Starter-Partner-in-MENA.png"
            imglink={data.featuredImage.node.mediaItemUrl}
            title={data.title}
            uri={data.uri}
          />
        </div>
      ))}
    </>
  );
}
