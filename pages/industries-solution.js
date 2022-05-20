import Banner from './coponents/banner';
import Footer from './coponents/footer';
import Header from './coponents/header';
import TabsSection from './coponents/tabs';
import LatestSuccessStories from './coponents/Latest-success-stories';
import IntrustedDepartment from './coponents/intrusted-department';


export default function IndustriesSolution() {

  return (
    <>
      <Header />

      <Banner
        heading="INDUSTRIES SOLUTION"
        sub_heading="Solution Founder offers proven solutions for all your industry needs and goals so your business can run better, faster, and more profitably, now and in the future."
        icon="industries-banner.png"
      />

      <TabsSection />

      <IntrustedDepartment/>

      <LatestSuccessStories/>
      <Footer />
    </>
  );
}
