import Banner from '../components/banner';
import BlogPost from '../components/blogpost';
import Footer from '../components/footer';
import Header from '../components/header';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';

export default function News_updates({ posts }) {
  return (
    <>
      <Header />
      <Banner heading="SOLUTION FOUNDER NEWS CENTER" icon="news-img.png" />

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          News & Update
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto mb-8">
          <BlogPost posts={posts} />
        </div>
      </section>
      <Footer />
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
          uri
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
