import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Cardnew from './components/card-new';
import Image from 'next/image';
import LatestSuccessStories from './components/Latest-success-stories';

export default function Unifood() {
  return (
    <>
      <Header />

      <Banner
        heading="Unifood"
        sub_heading="Unifood (National Foodstuff Manufacturing Company Limited) was established in Jeddah in 1971 and it is considered the first factory in Saudi Arabia to specialize in the commercial production of different types and shapes of pasta."
        icon="Unifood.png"
      />

      <section className="pt-14 px-7">
        <div className=" max-w-[755px] mx-auto grid gap-7">
          <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-7">
            <Cardnew title="Sales and Customer Services" icon="sales.png" />
            <Cardnew title="Operations Planning" icon="sales.png" />
            <Cardnew title="Fleet Management" icon="sales.png" />
            <Cardnew title="Route Management" icon="sales.png" />
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
            src="/images/Unifood-img.jpg"
            alt="Unifood-img.jpg"
            width={1400}
            height={800}
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
          <Cardnew title="Sales and Customer Services" icon="sales.png" />
          <Cardnew title="Operations Planning" icon="sales.png" />
          <Cardnew title="Fleet Management" icon="sales.png" />
          <Cardnew title="Route Management" icon="sales.png" />
          <Cardnew title="Driver Employee Management" icon="sales.png" />
          <Cardnew title="3pl Management" icon="sales.png" />
          <Cardnew title="Documents Management" icon="sales.png" />
          <Cardnew
            title="Terminal And Storage Area Management"
            icon="sales.png"
          />
        </div>
      </section>

      <LatestSuccessStories />

      <Footer />
    </>
  );
}
