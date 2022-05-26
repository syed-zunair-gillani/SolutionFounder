import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Cardnew from './components/card-new';
import { BsArrowRight } from 'react-icons/bs';
import StoryBox from './components/story-box';
import LatestSuccessStories from './components/Latest-success-stories';
// images 
import icon1 from '../public/images/sales.png'
import IntrustedDepartment from './components/intrusted-department';



export default function Financial_Management() {
  return (
    <>
      <Header />

      <Banner
        heading="FINANCIAL MANAGEMENT"
        sub_heading="Our Financial Management allows you for planning, organizing, directing and controlling the financial activities."
        icon="financial-management.png"
      />

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          <Cardnew title="Sales and Customer Services" icon={icon1} />
          <Cardnew title="Operations Planning" icon={icon1} />
          <Cardnew title="Fleet Management" icon={icon1} />
          <Cardnew title="Route Management" icon={icon1} />
          <Cardnew title="Driver Employee Management" icon={icon1} />
          <Cardnew title="3pl Management" icon={icon1} />
          <Cardnew title="Documents Management" icon={icon1} />
          <Cardnew
            title="Terminal And Storage Area Management"
            icon={icon1}
          />
        </div>
      </section>

      <IntrustedDepartment/>

      <LatestSuccessStories/>

      <Footer />
    </>
  );
}
