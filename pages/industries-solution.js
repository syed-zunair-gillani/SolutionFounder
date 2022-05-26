import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import TabsSection from './components/tabs';
import LatestSuccessStories from './components/Latest-success-stories';
import IntrustedDepartment from './components/intrusted-department';


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
