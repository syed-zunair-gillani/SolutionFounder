import Banner from './components/banner';
import Contact_form from './components/contact-form';
import Footer from './components/footer';
import Header from './components/header';
import LatestSuccessStories from './components/Latest-success-stories';
import Locations from './components/locations';

export default function Contact_us() {
  return (
    <>
      <Header />

      <Banner
        heading="FIND AN SOLUTION FOUNDER OFFICE"
        sub_heading="The form below is the fastest way to get in touch with us. The more information we know, the better we’ll be prepared and able to help."
        icon="contact-banner-img.png"
      />

      <section className="px-2 pt-20 pb-9">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR LOCATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto mb-8">
          <Locations
            country="INDIA"
            states="Ahmedabad, Gujarat"
            phone="+91 84601 10120 "
          />
          <Locations
            country="Pakistan"
            states="Lahore, Karachi, Peshawar "
            phone="+92 312 40 43 429"
          />
          <Locations
            country="Saudi Arabia"
            states="Jeddah, Riyadh, Dammam"
            phone="+966 55 361 1503 "
            phone1="+966 570 786312"
          />
        </div>
      </section>

      <section className="px-2">
        <div className="md:py-12 md:px-10 p-5 max-w-[1200px] mx-auto mb-8 bg-[#133C6D]">
          <h2 className="mb-2 text-xl font-bold leading-8 text-center text-white uppercase md:text-2xl">
            CONTACT US
          </h2>
          <p className="mb-5 text-base font-light text-center text-white uppercase md:text-lg">
            We Value Your Time
          </p>
          <Contact_form />
        </div>
      </section>

      <LatestSuccessStories/>

      <Footer />
    </>
  );
}
