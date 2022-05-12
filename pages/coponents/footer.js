import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillFunnelPlot } from 'react-icons/ai';
import { FaIndustry } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <section className="bg-footerBg relative bg-cover md:bg-center bg-right-top bg-no-repeat py-14">
        <img
          src="/images/footer-F.png"
          alt="footer-F.png"
          className="absolute top-[55px] left-0 object-cover"
        />
        <div className="max-w-[1200px] mx-auto py-10 md:px-6 px-3">
          <div className="inline-flex md:w-1/4 items-center">
            <Link href="#" className="max-w-[80%]">
              <img src="/images/SF-White.png" alt="SF-White.png" />
            </Link>
            <Link href="#" className="w-full ml-2">
              <img src="/images/hirring.png" alt="hirring.png" />
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row flex-col max-w-[1200px] md:space-y-0 space-y-8 mx-auto md:px-6 px-3">
          <div className="md:w-1/5 w-full items-center space-y-3 z-10">
            <h2 className="text-white text-lg font-bold flex items-center">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <AiFillFunnelPlot />
              </span>{' '}
              Products
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="transportation">ERP Solutions</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="inventory-warehouse-management">Material Management</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="financial-management">Finance Management</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="sales">Customer Experience</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="hrm-and-payroll">Human Capital Management</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold flex items-center">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <AiFillFunnelPlot />
              </span>{' '}
              Company
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="about-us">About us</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="career">Career</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="success-stories">Success Stories</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="news-updates">News & Updates</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold flex items-center">
              <span className="text-[#8DC63F] text-2xl mr-1">
                <FaIndustry />
              </span>{' '}
              Industries Solution
            </h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="retail">Retail</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="manufacturing">Manufacturing</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="trading-distribution">Trading Distribution</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="custom-clearance-and-freight-forwarding">
                  Freight Forwarding
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="transportation">Logistics & Transportation</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="construction-and-contracting">
                  Construction & Real Estate
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold">Help and Support</h2>
            <ul className="space-y-4">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5 w-full items-center space-y-3">
            <h2 className="text-white text-lg font-bold">
              Solution Founder has set new standards in ERP industry
            </h2>
            <h2 className="text-white text-lg font-bold">Social</h2>
            <ul className="flex space-x-6">
              <li className="text-white hover:text-[#8DC63F] text-2xl font-semibold">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-2xl font-semibold">
                <Link href="#">
                  <BsTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#133C6D] border-t border-[#2F527C] py-5">
        <div className="flex md:flex-row flex-col items-center md:space-y-0 space-y-4 max-w-[1200px] mx-auto md:px-6 px-3">
          <div className="md:w-1/2 w-full flex md:justify-start justify-center">
            <p className="text-white text-base font-semibold">
              © Solution Founder 2020, All Rights Reserved
            </p>
          </div>
          <div className="md:w-1/2 w-full flex md:justify-end justify-center">
            <ul className="inline-flex space-x-5">
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="privacy-policy">Privacy Policy</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="terms-of-use">Terms Of Use</Link>
              </li>
              <li className="text-white hover:text-[#8DC63F] text-base font-semibold">
                <Link href="cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
