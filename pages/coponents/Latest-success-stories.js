import post1 from "../../public/images/Nawara-Transportation-dp.png";
import post2 from "../../public/images/HamatReady.png";
import post3 from "../../public/images/Quality-Education-Holdings-dp.png";
import post4 from "../../public/images/Unifood-dp.png";
import StoryBox from "./story-box";
import useSWR from "swr";
import { request } from 'graphql-request'
import { useEffect, useState } from "react";

const fetcher = query => request('https://solutionfounder.com/graphql', query)

export default function LatestSuccessStories() {

    const { data, error } = useSWR(
        `{
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
        }`,
        fetcher
      )


    return (
        <>
            <section className="py-28 px-7">
                <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
                    OUR SUCCESS STORIES
                </h2>
                
                    <StoryBox
                        storydata = {data}
                        icon={post1}
                        title="Nawara Transportation"
                        description="Nawara is one of leading logistics company in Saudi Arabia with head..."
                    />
          
            </section>
        </>
    );
}
