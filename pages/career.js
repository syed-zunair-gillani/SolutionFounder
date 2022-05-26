import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import { BsArrowRight } from 'react-icons/bs';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export default function career({ jobs }) {
  let counter = 1;
  return (
    <>
      <Header />

      <Banner
        heading="WHAT'S YOUR NEXT DESTINATION?"
        sub_heading="Create a world where anyone can belong anywhere, Join the Team"
        icon="career-banner-img.png"
      />

      <section className="px-3 py-24">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-[1200px] mx-auto ">
          <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center">
            INTERESTED? WE’RE HIRING.
          </h2>
          <p className="text-base font-medium text-center text-[#535353]">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </p>
          {jobs.map((job) => (
            <div className="grid gap-4 accordion" key={job.node.id}>
              <div className="accordion__item">
                <input type="checkbox" id={`title${counter}`} />
                <label htmlFor={`title${counter}`} className="hover:text-white">
                  {job.node.title}
                </label>
                <div
                  data={counter++}
                  id="job_content"
                  className="content"
                  dangerouslySetInnerHTML={{ __html: job.node.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllJobs {
      jobs {
        edges {
          node {
            uri
            id
            title
            content
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const jobs = response?.data?.jobs?.edges;
  return {
    props: {
      jobs,
    },
  };
}
