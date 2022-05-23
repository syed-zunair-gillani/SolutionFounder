import Header from './coponents/header';
import Footer from './coponents/footer';
import Banner from './coponents/banner';
import Cardnew from './coponents/card-new';
import IntrustedDepartment from './coponents/intrusted-department';
import LatestSuccessStories from './coponents/Latest-success-stories';
// images 
import icon1 from '../public/images/sales.png'


export default function Quality_Management() {
  return (
    <>
      <Header />

      <Banner
        heading="QUALITY MANAGEMENT"
        sub_heading="Define quality control plans to trigger quality checks at specific inventory operations (receiving and final inspection) or manufacturing operations (in-process inspection).

Set up in-process, final, and receiving inspections based on a quality control plan. Define quality control plans to trigger in-process, final, and receiving inspections.

Manage and track production part approval process (PPAP) submissions. Configure your statistical process control (SPC). Attach process failure mode and effects analysis (PFMEA) documents to routings."
        icon="quality-management.png"
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
            title="Terminal And Storage Area Management 123"
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
