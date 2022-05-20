import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Link from 'next/link';


export default function LatestStories({ posts }) {
  // console.log('latest stories****', posts);
  return (
    <>
        <h2 className="md:text-4xl text-3xl leading-8 font-bold text-[#302E2E] text-center mb-8">
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1200px] mx-auto mb-8">
        
          {/* {
            posts.map((story => (
              <>

                <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
                  <img
                      src={story.node.featuredImage.node.mediaItemUrl}
                      alt="img"
                      className=""
                    />
                  <div className="p-5 space-y-1">
                    <h3 className="box-title">
                      <Link href={story.node.uri}>{story.node.title}</Link>
                    </h3>
                    <p className="text-base font-medium text-[#535353]">
                      {story.node.successStoryExtra.shortInfo}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 flex justify-end">
                    <img
                      src="/images/color-bar (1).jpg"
                      alt="images/color-bar (1).jpg"
                      className="w-[55%] h-[10px]"
                    />
                  </div>
                </div>
              </>
            )))
          } */}

        </div>
  
    </>
  );
}





export async function getStaticProps() {
  const GET_POSTS = gql`
  query getLatestStories {
    allSuccessStories {
      edges {
        node {
          uri
          title
        }
      }
    }
  }
`;
const response = await client.query({
  query: GET_POSTS,
});
const posts = response.data.allSuccessStories;
return {
  props: {
    posts,
  },
};
}