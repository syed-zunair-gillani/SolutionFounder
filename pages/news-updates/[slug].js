import { useRouter } from 'next/router'
import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';

export default function Post ({posts}) {
  const router = useRouter()
  const { slug } = router.query
  console.log('posts', posts);

  return (
    <>
      <p>Post: {slug}</p>
    </>
  )
}



export async function getStaticProps() {
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          slug
          
          featuredImage {
            node {
              mediaItemUrl
            }
          }
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


export async function getStaticPaths() {

  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          slug
          
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;

  return {
    fallback: true, // false or 'blocking'
    path: posts.map(data=>(
      {
        params: { slug: data.slug.toString() }
      }
    ))
  };
}





