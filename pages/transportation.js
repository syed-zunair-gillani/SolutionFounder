import Header from './coponents/header';
import Footer from './coponents/footer';
import Banner from './coponents/banner';
import Cardnew from './coponents/card-new';
import { BsArrowRight } from 'react-icons/bs';
import LatestSuccessStories from './coponents/Latest-success-stories';
// images
import icon1 from '../public/images/sales.png'
import IntrustedDepartment from './coponents/intrusted-department';



export default function Transportation() {
  return (
    <>
      <Header/>

      <Banner
        heading="TRANSPORTATION AND LOGISTICS"
        sub_heading="Solution Founder’s Transportation and Logistics management system is designed to manage all transportation activities throughout supply chain. Give full visibility of business and allow you to grow in controlled and secure manner."
        icon="product-banner-img.png"
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
