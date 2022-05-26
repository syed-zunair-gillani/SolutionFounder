import Head from 'next/head';
import { AiOutlineDown } from 'react-icons/ai';
import Link from 'next/link';
import Mega_Menu from './mega-menu';
import { useState } from 'react';
import Company_Menu from './company-menu';
import Image from 'next/image';

export default function Header() {
  const [megaMenu, setMegaMenu] = useState(true);
  const [CompMegaMenu, setCompMegaMenu] = useState(true);

  const HandleMegaMenu = () => {
    setMegaMenu(!megaMenu);
    setCompMegaMenu(true);
  };
  const HandleComp_MegaMenu = () => {
    setCompMegaMenu(!CompMegaMenu);
    setMegaMenu(true);
  };
  return (
    <>
      <Head>
        <title>Home - Solution Founder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        />
        <link rel="canonical" href="http://solutionfounder.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Solution Founder" />
        <meta
          property="og:description"
          content="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        />
        <meta property="og:url" content="http://solutionfounder.com/" />
        <meta property="og:site_name" content="Solution Founder" />
        <meta
          property="article:modified_time"
          content="2022-03-10T07:09:44+00:00"
        />
        <meta
          property="og:image"
          content="http://solutionfounder.com/wp-content/uploads/2020/07/home-banner-img.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@odoo_solutions" />
        <link
          rel="icon"
          href="https://solutionfounder.com/wp-content/uploads/2020/07/SF-White-F.svg"
          sizes="32x32"
        />
      </Head>

      <header className="bg-[#133c6d] border-[#284D78] border-b fixed w-full z-50">
        <div className="bg-[#133c6d] flex flex-row items-center justify-between  p-6 max-w-[1200px] mx-auto">
          <div className="w-1/2 md:w-1/4">
            <Link href="/" passHref>
              <Image
                src="/images/SF-White.png"
                alt="SF-White.png"
                className="max-w-[80%] cursor-pointer"
                width={225}
                height={40}
              />
            </Link>
          </div>
          <div className="hidden w-auto md:block">
            <ul className="flex items-center justify-center space-x-12">
              <li className="inline text-base font-semibold text-white">
                <Link href="/">Home</Link>
              </li>
              <li
                className="inline text-base font-semibold text-white cursor-pointer"
                onClick={HandleMegaMenu}
              >
                <span className="flex items-center ">
                  Products
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                  <ul
                    className={`fixed transition-all left-1/2 transform -translate-x-1/2 -z-20 ${
                      megaMenu ? '-top-[500px]' : 'top-[87px]'
                    }`}
                  >
                    <Mega_Menu />
                  </ul>
                </span>
              </li>
              <li className="inline text-base font-semibold text-white">
                <Link href="/industries-solution">Industries Solution</Link>
              </li>
              <li className="inline text-base font-semibold text-white">
                <Link href="/success-stories">Success Stories</Link>
              </li>
              <li className="inline text-base font-semibold text-white">
                <Link href="/news-updates">News & Updates</Link>
              </li>
              <li
                className="inline text-base font-semibold text-white cursor-pointer"
                onClick={HandleComp_MegaMenu}
              >
                <span className="relative flex items-center hover-trigger">
                  Company
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                  <ul
                    className={`absolute top-[57px] left-1/2 transform -translate-x-1/2 ${
                      CompMegaMenu ? 'hidden' : 'block'
                    }`}
                  >
                    <Company_Menu />
                  </ul>
                </span>
              </li>
            </ul>
          </div>
          <div className="items-center block w-auto md:hidden">
            <button className="px-1 py-2 bg-white rounded-sm shadow-md">
              <svg
                className="text-gray-900 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
