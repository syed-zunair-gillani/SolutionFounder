import Head from 'next/head';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Header from '../coponents/header';
import Banner from '../coponents/banner';

export default function SlugPage({ post }) {

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Header/>
      <Banner heading="SOLUTION FOUNDER NEWS CENTERSOLUTION FOUNDER HAS WON THE AWARD 2019" imgurl={post.featuredImage.node.mediaItemUrl} />
      <main>
        <p>{post.title}</p>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>
    </div>
  );
}
const GET_POST = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      id
      uri
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  // const response = await getPostByUri(params.uri)
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
