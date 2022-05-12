import { AiOutlineDown } from 'react-icons/ai';
import Link from 'next/link';
import Mega_Menu from './mega-menu';
import { useState } from 'react';
import Company_Menu from './company-menu';

export default function Header() {

  const [megaMenu, setMegaMenu] = useState(true);
  const [CompMegaMenu, setCompMegaMenu] = useState(true);

  const HandleMegaMenu =()=>{
    setMegaMenu(!megaMenu);
    setCompMegaMenu(true)
  }
  const HandleComp_MegaMenu =()=>{
    setCompMegaMenu(!CompMegaMenu);
    setMegaMenu(true);
  }
  return (
    <>
      <header className="bg-[#133c6d] border-[#284D78] border-b fixed w-full z-50">
        <div className="bg-[#133c6d] flex flex-row items-center justify-between p-6 max-w-[1200px] mx-auto">
          <div className="md:w-1/4 w-1/2">
            <Link href="/">
              <img
                src="/images/SF-White.png"
                alt="SF-White.png"
                className="max-w-[80%] cursor-pointer"
              />
            </Link>
          </div>
          <div className="w-auto md:block hidden">
            <ul className="flex justify-center space-x-12 items-center">
              <li className="inline text-white text-base font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="inline text-white text-base font-semibold cursor-pointer" onClick={HandleMegaMenu}>
                <span className="flex items-center ">
                  Products
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                  <ul className={`fixed transition-all left-1/2 transform -translate-x-1/2 -z-20 ${ megaMenu ? '-top-[500px]' : 'top-[87px]' }`}>
                    <Mega_Menu/>
                  </ul>
                </span>
              </li>
              <li className="inline text-white text-base font-semibold">
                <Link href="industries">Industries Solution</Link>
              </li>
              <li className="inline text-white text-base font-semibold">
                <Link href="success-stories">Success Stories</Link>
              </li>
              <li className="inline text-white text-base font-semibold">
                <Link href="news-updates">News & Updates</Link>
              </li>
              <li className="inline text-white text-base font-semibold cursor-pointer" onClick={HandleComp_MegaMenu}>
                <span
                  className="flex items-center relative hover-trigger"
                >
                  Company{' '}
                  <span className="ml-1">
                    <AiOutlineDown />
                  </span>
                  <ul className={`absolute top-[57px] left-1/2 transform -translate-x-1/2 ${ CompMegaMenu ? 'hidden' : 'block' }`}>
                    <Company_Menu/>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
          <div className="w-auto md:hidden block items-center">
            <button className="bg-white rounded-sm py-2 px-1 shadow-md">
              <svg
                className="fill-current text-gray-900"
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
