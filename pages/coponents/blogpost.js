import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Stories from './coponents/Stories';

export default function BlogPost({ posts }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">Headless WordPress Next.js Starter.</h1>
        <hr />

        <div className="grid">
          {posts.map((post) => {
            return (
              <>
                <Stories key={post.uri} post={post}></Stories>
                <hr />
              </>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          slug
          excerpt
          content
          date
          uri
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
