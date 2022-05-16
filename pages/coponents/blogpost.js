import StoryBox from './story-box';

export default function BlogPost({ posts }) {
  return (
    <>
      {posts.map((data) => (
        <StoryBox
          icon="Awarded-as-Best-Starter-Partner-in-MENA.png"
          imglink={data.featuredImage.node.mediaItemUrl}
          title={data.title}
          slug={data.slug}
        />
      ))}
    </>
  );
}
