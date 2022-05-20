import Header from './coponents/header';
import Footer from './coponents/footer';
import Banner from './coponents/banner';
import Cardnew from './coponents/card-new';
import LatestSuccessStories from './coponents/Latest-success-stories';
// images 
import icon1 from '../public/images/sales.png'
import IntrustedDepartment from './coponents/intrusted-department';



export default function Inventory_warehouse_management() {
  return (
    <>
      <Header />

      <Banner
        heading="INVENTORY & WAREHOUSE MANAGEMENT SYSTEM"
        sub_heading="Get the most efficient stocking method and improve all your internal operations. Use order points and automated RFQs to make your supply chain more efficient than ever. Drop-shipping, Cross-docking & Multi-warehouse are some of key features of our Inventory module."
        icon="inventory-img.png"
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
