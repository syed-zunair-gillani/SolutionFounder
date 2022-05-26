import post1 from '../../public/images/Nawara-Transportation-dp.png';
import post2 from '../../public/images/HamatReady.png';
import post3 from '../../public/images/Quality-Education-Holdings-dp.png';
import post4 from '../../public/images/Unifood-dp.png';
import StoryBox from './story-box';
import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';

export default function LatestSuccessStories({ posts }) {
  return (
    <>
      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          {posts.map((story) => (
            <>
              <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
                <Image
                  src={story.node.featuredImage.node.mediaItemUrl}
                  alt="img"
                  className=""
                  width={400}
                  height={300}
                />
                <div className="p-5 space-y-1">
                  <h3 className="box-title">
                    <Link href={story.node.uri}>{story.node.title}</Link>
                  </h3>
                  <p className="text-base font-medium text-[#535353]"></p>
                </div>
                <div className="absolute bottom-0 right-0 flex justify-end">
                  <Image
                    src="/images/color-bar-light.jpg"
                    alt="images/color-bar-light.jpg"
                    className="w-[55%] h-[10px]"
                    width={160}
                    height={8}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllSuccessStories {
      allSuccessStories(first: 40) {
        edges {
          node {
            title
            uri
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            successStoryExtra {
              shortInfo
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response.data.allSuccessStories.edges;
  return {
    props: {
      posts,
    },
  };
}
