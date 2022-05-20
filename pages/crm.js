import Header from './coponents/header';
import Footer from './coponents/footer';
import Banner from './coponents/banner';
import Cardnew from './coponents/card-new';
import IntrustedDepartment from '../pages/coponents/intrusted-department'
import LatestSuccessStories from './coponents/Latest-success-stories';
// images 
import icon1 from '../public/images/sales.png'



export default function Crm() {
  return (
    <>
      <Header />

      <Banner
        heading="CRM"
        sub_heading="CRM allows Sales teams to keep track of their top leads and opportunities. Users can personalize their sales cycle, take control of their statistics, forecasts and create marketing campaign automation to increase their sales performance."
        icon="crm.png"
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
