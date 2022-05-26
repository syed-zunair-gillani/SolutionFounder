import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Cardnew from './components/card-new';
import { BsArrowRight } from 'react-icons/bs';
import LatestSuccessStories from './components/Latest-success-stories';
import Image from 'next/image';
// images
import icon1 from '../public/images/sales.png';
import IntrustedDepartment from './components/intrusted-department';

export default function Hrm_And_Payroll() {
  return (
    <>
      <Header />

      <Banner
        heading="HRM AND PAYROLL​"
        sub_heading="Full HRM system ready to use. Track the time spent by project, client or tasks. Access to the record time sheets and analyze all the employee’s attendance based on weekly or monthly time sheets.
            Manage the employee’s leaves and do the distinction between the legal leaves, sick days or holidays"
        icon="hrm-and-payroll.png"
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
          <Cardnew title="Terminal And Storage Area Management" icon={icon1} />
        </div>
      </section>

      <IntrustedDepartment />

      <LatestSuccessStories />

      <Footer />
    </>
  );
}
