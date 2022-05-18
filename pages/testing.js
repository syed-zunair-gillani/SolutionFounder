import { client } from '../lib/apollo';
import { gql } from '@apollo/client';
import Stories from './coponents/Stories';
import Head from 'next/head';

export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
    </>
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
