import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Cardnew from './components/card-new';
import LatestSuccessStories from './components/Latest-success-stories';
// images 
import icon1 from '../public/images/sales.png'
import Image from 'next/image';


export default function Al_Bassami_Group() {
  return (
    <>
      <Header />

      <Banner
        heading="Al Bassami Transportation"
        sub_heading="Al Bassami International Business Group Co. (Al-Bassami Transportation) is one of the leading Car Carrier and Logistics companies of Saudi Arabia spreading over 52 Branches KSA Wide & 3 in GCC with more than 1000 employees."
        icon="Al-Bassami-Group.png"
      />

      <section className="pt-14 px-7">
        <div className=" max-w-[755px] mx-auto grid gap-7">
          <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-7">
            <Cardnew title="Sales and Customer Services" icon={icon1} />
            <Cardnew title="Operations Planning" icon={icon1} />
            <Cardnew title="Fleet Management" icon={icon1} />
            <Cardnew title="Route Management" icon={icon1} />
          </div>
          <h1 className="text-2xl font-normal ">
            Solutionfounder makes it easier for them to import products from
            China and Turkey
          </h1>
          <p className="text-lg font-normal text-justify text-[#535353]">
            and sell them in local market through integrated sales & purchase
            modules.
          </p>
          <Image
            src="/images/al-bassami-group-img.jpg"
            alt="al-bassami-group-img.jpg"
            width={1200}
            height={750}
          />
          <h1 className="text-2xl font-normal ">About ODOO Implementation</h1>
          <p className="text-lg font-normal text-justify text-[#535353]">
            For Khalid Stationery, Solutionfounder ERP modules include
            accounting, e-commerce, attendance, employee, payroll and leave
            management for smooth working during sales, purchase, stocks and
            employees. Solutionfounder also assist them in reporting for new
            buyers and online sales through well-developed ERP modules.
            Solutionfounder guide them for the best practice business related to
            the ERP.
          </p>
          <hr></hr>
          <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-12">
            Solution Founder Custom Apps for Khalid Stationery
          </h2>
        </div>
      </section>

      <section className="px-7">
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

      <LatestSuccessStories/>

      <Footer />
    </>
  );
}
