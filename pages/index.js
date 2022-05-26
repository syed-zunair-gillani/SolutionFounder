import Banner from './coponents/banner';
import Footer from './coponents/footer';
import Header from './coponents/header';
import Card from './coponents/card';
import ImageBox from './coponents/image-box';
import TeamSection from './coponents/team_section';
import CTA from './coponents/cta';
// importing images
import AwardWinner from '../public/images/Award-winner.png'
import LatestSuccessStories from './coponents/Latest-success-stories';

export default function Home() {

 
  return (
    <>
      <Header />

      <Banner
        heading="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        sub_heading="Increase business ability get profitable growth. Enjoy freedom of open source."
        icon="home-banner-img.png"
      />

      <Card />

      <section className="bg-[#DCE6F9] relative py-28 px-7">
        <div className="custom-shape-divider-top-1652087344">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          WHY CHOOSE SOLUTION FOUNDER
        </h2>
        <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-x-0 space-y-8 max-w-[1200px] mx-auto">
          <ImageBox
            className="bg-amber-200"
            icon={AwardWinner}
            title="Award Winner"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon={AwardWinner}
            title="Global Reach"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon={AwardWinner}
            title="Trusted Security"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
        </div>
        <div className="custom-shape-divider-bottom-1651145428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <TeamSection />

      <CTA />

      <LatestSuccessStories />
     
      <Footer />

    </>
  );
}


